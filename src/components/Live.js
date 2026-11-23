import React, { useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  DesktopComputerIcon,
  StatusOnlineIcon,
  TrashIcon
} from '@heroicons/react/outline';
import AddSource from './AddSource';
import { ChannelMark, FavoriteButton } from './ChannelCard';
import Player from './Player';
import { featured } from '../channels';

export default function Live({ catalog, favorites, onToggle, onAdd, onRemove }) {
  const { channelId } = useParams();
  const { state } = useLocation();
  const channel = channelId ? catalog.find((item) => item.id === channelId) : featured;
  const navigate = useNavigate();
  const [theater, setTheater] = useState(false);

  if (!channel) {
    return (
      <div className="empty-state">
        <StatusOnlineIcon />
        <h1>Kanal tidak ditemukan</h1>
        <Link className="button button-secondary" to="/live">
          Buka siaran pilihan
        </Link>
      </div>
    );
  }

  return (
    <section className="section">
      <div className="live-top">
        <Link to="/channels" className="text-link">
          <ArrowLeftIcon /> Semua kanal
        </Link>
        <AddSource onAdd={(source) => navigate(`/live/${onAdd(source)}`)} />
      </div>
      <div className={`watch-layout ${theater ? 'theater' : ''}`}>
        <div className="watch-content">
          <div className="watch-heading">
            <div>
              <p className="overline">
                {channel.category} · {channel.custom ? 'Sumber saya' : 'Kanal demo'}
              </p>
              <h1>{channel.title}</h1>
            </div>
            <div className="watch-actions">
              <FavoriteButton
                channel={channel}
                favorite={favorites.includes(channel.id)}
                onToggle={onToggle}
              />
              <button
                type="button"
                className="icon-button"
                aria-label="Mode teater"
                title="Mode teater"
                aria-pressed={theater}
                onClick={() => setTheater((value) => !value)}>
                <DesktopComputerIcon />
              </button>
              {channel.custom && (
                <button
                  type="button"
                  className="icon-button"
                  aria-label="Hapus sumber"
                  title="Hapus sumber"
                  onClick={() => {
                    onRemove(channel.id);
                    navigate('/live');
                  }}>
                  <TrashIcon />
                </button>
              )}
            </div>
          </div>
          <Player key={channel.id} channel={channel} autoplay={state?.autoplay === true} />
          <div className="watch-info">
            <ChannelMark channel={channel} />
            <div>
              <h2>{channel.name}</h2>
              <p>
                {channel.description ||
                  (channel.custom
                    ? 'Video diputar langsung dari URL sumber yang Anda tambahkan.'
                    : 'Cuplikan contoh dari katalog Siar TV.')}
              </p>
            </div>
          </div>
        </div>
        <aside className="watch-channels" aria-label="Pilih kanal">
          <h2>Pilih kanal</h2>
          {catalog.map((item) => (
            <Link
              key={item.id}
              className={channel.id === item.id ? 'selected' : ''}
              to={`/live/${item.id}`}
              aria-current={channel.id === item.id ? 'true' : undefined}>
              <ChannelMark channel={item} />
              <span>
                <strong>{item.name}</strong>
                <small>{item.category}</small>
              </span>
              <ChevronRightIcon />
            </Link>
          ))}
        </aside>
      </div>
    </section>
  );
}
