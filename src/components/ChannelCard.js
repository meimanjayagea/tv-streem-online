import React from 'react';
import { Link } from 'react-router-dom';
import { BookmarkIcon, PlayIcon } from '@heroicons/react/outline';
import { BookmarkIcon as SavedIcon } from '@heroicons/react/solid';

export function ChannelMark({ channel }) {
  return (
    <span className="channel-mark" style={{ '--channel-accent': channel.accent }}>
      {channel.initials}
    </span>
  );
}

export function FavoriteButton({ channel, favorite, onToggle, className = '' }) {
  const Icon = favorite ? SavedIcon : BookmarkIcon;
  return (
    <button
      type="button"
      className={`icon-button favorite-button ${className}`}
      aria-label={`Favorit ${channel.name}`}
      aria-pressed={favorite}
      onClick={() => onToggle(channel.id)}
      title={favorite ? 'Hapus dari favorit' : 'Simpan ke favorit'}>
      <Icon />
    </button>
  );
}

export default function ChannelCard({ channel, favorite, onToggle }) {
  return (
    <article className="channel-card">
      <Link to={`/live/${channel.id}`} className="channel-link">
        <div className="channel-image" style={{ '--channel-accent': channel.accent }}>
          {channel.image && <img src={channel.image} alt="" />}
          <span className="channel-tag">{channel.custom ? 'SUMBER SAYA' : 'DEMO'}</span>
          <span className="card-play">
            <PlayIcon />
          </span>
        </div>
        <div className="channel-summary">
          <ChannelMark channel={channel} />
          <div>
            <h3>{channel.name}</h3>
            <p>{channel.category}</p>
          </div>
        </div>
      </Link>
      <FavoriteButton channel={channel} favorite={favorite} onToggle={onToggle} />
    </article>
  );
}
