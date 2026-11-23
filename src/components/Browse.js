import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowNarrowRightIcon,
  BookmarkIcon,
  CalendarIcon,
  CollectionIcon,
  PlayIcon,
  SearchIcon
} from '@heroicons/react/outline';
import ChannelCard, { ChannelMark } from './ChannelCard';
import { categories, channels, featured, schedule } from '../channels';

export function Hero() {
  return (
    <section className="hero" aria-labelledby="featured-title">
      <img className="hero-image" src={featured.image} alt="" />
      <div className="hero-content">
        <div className="hero-kicker">
          <span /> SIARAN PILIHAN
        </div>
        <h1 id="featured-title">
          Di Atas Awan
          <br />
          Bromo
        </h1>
        <p className="hero-description">{featured.description}</p>
        <div className="hero-meta">
          Nusantara <span /> Dokumenter <span /> Demo
        </div>
        <div className="hero-actions">
          <Link
            className="button button-primary"
            to={`/live/${featured.id}`}
            state={{ autoplay: true }}>
            <PlayIcon /> Putar sekarang
          </Link>
          <Link className="button button-secondary" to="/guide">
            <CalendarIcon /> Lihat jadwal
          </Link>
        </div>
      </div>
    </section>
  );
}

export function ChannelCatalog({ catalog, favorites, onToggle, mode, query }) {
  const [category, setCategory] = useState('Semua');
  const isHome = mode === 'home';
  const isFavorites = mode === 'favorites';
  const listing = catalog.filter((channel) => {
    const matchesFavorite = !isFavorites || favorites.includes(channel.id);
    const matchesCategory = category === 'Semua' || channel.category === category;
    const matchesQuery = `${channel.name} ${channel.title} ${channel.category}`
      .toLowerCase()
      .includes(query.toLowerCase());
    return matchesFavorite && matchesCategory && matchesQuery;
  });
  const heading = isFavorites
    ? 'Kanal favorit'
    : query
    ? `Hasil untuk “${query}”`
    : 'Jelajahi kanal';
  const Heading = isHome ? 'h2' : 'h1';

  return (
    <section className="section catalog" aria-labelledby="catalog-title">
      <div className="section-heading">
        <div>
          <Heading id="catalog-title">{heading}</Heading>
          <p>
            {isFavorites
              ? 'Kanal yang Anda simpan untuk ditonton lagi.'
              : 'Pilih kanal dan mulai menonton.'}
          </p>
        </div>
        {isHome && (
          <Link className="text-link" to="/channels">
            Semua kanal <ArrowNarrowRightIcon />
          </Link>
        )}
      </div>
      {!isFavorites && (
        <div className="chips" aria-label="Filter kategori">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={category === item}
              onClick={() => setCategory(item)}>
              {item === 'Semua' && <CollectionIcon />} {item}
            </button>
          ))}
        </div>
      )}
      {listing.length ? (
        <div className="channel-grid">
          {listing.map((channel) => (
            <ChannelCard
              key={channel.id}
              channel={channel}
              favorite={favorites.includes(channel.id)}
              onToggle={onToggle}
            />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          {isFavorites ? <BookmarkIcon /> : <SearchIcon />}
          <h2>{isFavorites ? 'Belum ada kanal favorit' : 'Kanal tidak ditemukan'}</h2>
          <p>
            {isFavorites
              ? 'Simpan kanal dengan tombol penanda di kartunya.'
              : 'Coba kata kunci atau kategori lain.'}
          </p>
          <Link className="button button-secondary" to="/">
            Kembali ke beranda
          </Link>
        </div>
      )}
    </section>
  );
}

export function Guide({ compact = false }) {
  const Heading = compact ? 'h2' : 'h1';

  return (
    <section className="section guide" aria-labelledby="guide-title">
      <div className="section-heading">
        <div>
          <Heading id="guide-title">{compact ? 'Panduan TV' : 'Jadwal program'}</Heading>
          <p>Contoh susunan program · Waktu Indonesia Barat</p>
        </div>
        {compact && (
          <Link className="text-link" to="/guide">
            Lihat jadwal <ArrowNarrowRightIcon />
          </Link>
        )}
      </div>
      <div className="guide-list">
        {schedule.map((program) => {
          const channel = channels.find((item) => item.id === program.channelId);
          return (
            <Link className="guide-row" key={program.channelId} to={`/live/${channel.id}`}>
              <span className="guide-time">
                {program.time} <small>WIB</small>
              </span>
              <ChannelMark channel={channel} />
              <div className="guide-title">
                <strong>{channel.title}</strong>
                <span>
                  {channel.name} · {channel.category}
                </span>
              </div>
              <span className="guide-duration">{program.duration}</span>
              <PlayIcon className="guide-play" />
            </Link>
          );
        })}
      </div>
    </section>
  );
}
