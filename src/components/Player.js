import React, { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';
import { ExclamationCircleIcon, RefreshIcon } from '@heroicons/react/outline';
import { getStreamType } from '../channels';

export default function Player({ channel, autoplay = false }) {
  const videoRef = useRef(null);
  const [attempt, setAttempt] = useState(0);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    const video = videoRef.current;
    const isHls = getStreamType(channel.source) === 'hls';
    let hls;

    function handleError() {
      setStatus('error');
    }

    function handleReady() {
      setStatus('ready');
    }

    video.addEventListener('error', handleError);
    video.addEventListener('canplay', handleReady);

    if (!isHls || video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = channel.source;
    } else if (Hls.isSupported()) {
      hls = new Hls();
      hls.on(Hls.Events.ERROR, (_event, data) => {
        if (data.fatal) handleError();
      });
      hls.loadSource(channel.source);
      hls.attachMedia(video);
    } else {
      handleError();
    }

    return () => {
      video.removeEventListener('error', handleError);
      video.removeEventListener('canplay', handleReady);
      hls?.destroy();
      video.removeAttribute('src');
      video.load();
    };
  }, [channel.source, attempt]);

  return (
    <div className="player">
      <video
        ref={videoRef}
        aria-label={channel.title}
        controls
        autoPlay={autoplay}
        playsInline
        preload="auto"
        poster={channel.image}
      />
      {status === 'loading' && (
        <div className="player-loading" role="status">
          Memuat video…
        </div>
      )}
      {status === 'error' && (
        <div className="player-error" role="alert">
          <ExclamationCircleIcon />
          <strong>Video tidak dapat dimuat</strong>
          <p>Periksa koneksi dan pastikan sumber video dapat dibuka.</p>
          <button
            className="button button-secondary"
            type="button"
            onClick={() => {
              setStatus('loading');
              setAttempt((value) => value + 1);
            }}>
            <RefreshIcon /> Coba lagi
          </button>
        </div>
      )}
    </div>
  );
}
