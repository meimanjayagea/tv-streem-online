import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import {
  ArrowNarrowRightIcon,
  BookmarkIcon,
  CalendarIcon,
  ChevronRightIcon,
  DesktopComputerIcon,
  HomeIcon,
  PlayIcon,
  SearchIcon,
  StatusOnlineIcon
} from '@heroicons/react/outline';

const navItems = [
  { label: 'Beranda', path: '/', icon: HomeIcon },
  { label: 'Siaran Live', path: '/live', icon: StatusOnlineIcon },
  { label: 'Panduan TV', path: '/guide', icon: CalendarIcon },
  { label: 'Favorit', path: '/favorites', icon: BookmarkIcon }
];

function Brand() {
  return (
    <Link className="brand" to="/" aria-label="Siar TV, beranda">
      <span className="brand-mark">
        <PlayIcon />
      </span>
      <span>
        Siar<span className="brand-dot">.</span>
      </span>
      <span className="brand-tv">TV</span>
    </Link>
  );
}

export function Navigation() {
  return (
    <aside className="sidebar">
      <Brand />
      <nav aria-label="Navigasi utama">
        <p className="nav-label">JELAJAHI</p>
        {navItems.map(({ label, path, icon: Icon }) => (
          <NavLink key={path} to={path} end={path === '/'}>
            <Icon />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
      <Link className="sidebar-note" to="/live">
        <div className="note-icon">
          <DesktopComputerIcon />
        </div>
        <div>
          <strong>Sumber saya</strong>
          <p>Tambahkan MP4 atau HLS.</p>
        </div>
      </Link>
    </aside>
  );
}

export function Header({ page }) {
  const navigate = useNavigate();
  const { search } = useLocation();
  const query = new URLSearchParams(search).get('q') ?? '';
  const [input, setInput] = useState(query);
  useEffect(() => setInput(query), [query]);

  function searchChannels(event) {
    event.preventDefault();
    const value = input.trim();
    navigate(value ? `/channels?q=${encodeURIComponent(value)}` : '/channels');
  }

  return (
    <header className="topbar">
      <div className="mobile-brand">
        <Brand />
      </div>
      <div className="breadcrumb">
        <DesktopComputerIcon />
        <ChevronRightIcon /> <span>{page}</span>
      </div>
      <form className="search" role="search" onSubmit={searchChannels}>
        <SearchIcon />
        <input
          type="search"
          aria-label="Cari kanal atau program"
          placeholder="Cari kanal atau program..."
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button type="submit" aria-label="Cari">
          <ArrowNarrowRightIcon />
        </button>
      </form>
      <Link to="/favorites" className="icon-button header-favorites" aria-label="Buka favorit">
        <BookmarkIcon />
      </Link>
    </header>
  );
}
