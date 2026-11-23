import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ChannelCatalog, Guide, Hero } from './components/Browse';
import Live from './components/Live';
import { Header, Navigation } from './components/Navigation';
import { channels } from './channels';
import './App.css';

function useStoredList(key) {
  const [items, setItems] = useState(() => {
    try {
      const value = JSON.parse(localStorage.getItem(key));
      return Array.isArray(value) ? value : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(items));
    } catch {
      // Browsers with storage disabled can still use the app for the current session.
    }
  }, [items, key]);

  return [items, setItems];
}

const pageNames = {
  home: 'Beranda',
  live: 'Siaran Live',
  favorites: 'Favorit',
  guide: 'Panduan TV',
  channels: 'Semua kanal'
};

export default function App({ page }) {
  const [favorites, setFavorites] = useStoredList('siar-favorites');
  const [sources, setSources] = useStoredList('siar-sources');
  const { search, pathname } = useLocation();
  const query = new URLSearchParams(search).get('q') ?? '';
  const catalog = [...channels, ...sources];

  useEffect(() => {
    document.title = `${pageNames[page]} | Siar TV`;
  }, [page]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  function toggleFavorite(id) {
    setFavorites((items) =>
      items.includes(id) ? items.filter((item) => item !== id) : [...items, id]
    );
  }

  function addSource({ name, source }) {
    const id = `sumber-${crypto.randomUUID?.() ?? Date.now()}`;
    setSources((items) => [
      ...items,
      {
        id,
        name,
        source,
        title: name,
        category: 'Sumber saya',
        accent: '#53e6ac',
        initials: name[0].toUpperCase(),
        custom: true
      }
    ]);
    return id;
  }

  function removeSource(id) {
    setSources((items) => items.filter((item) => item.id !== id));
    setFavorites((items) => items.filter((item) => item !== id));
  }

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">
        Lewati ke konten
      </a>
      <Navigation />
      <div className="workspace">
        <Header page={pageNames[page]} />
        <main id="main-content" className="main-content">
          {page === 'home' && <Hero />}
          {(page === 'home' || page === 'channels' || page === 'favorites') && (
            <ChannelCatalog
              key={`${page}:${query}`}
              mode={page}
              catalog={catalog}
              favorites={favorites}
              onToggle={toggleFavorite}
              query={query}
            />
          )}
          {(page === 'home' || page === 'guide') && <Guide compact={page === 'home'} />}
          {page === 'live' && (
            <Live
              catalog={catalog}
              favorites={favorites}
              onToggle={toggleFavorite}
              onAdd={addSource}
              onRemove={removeSource}
            />
          )}
        </main>
        <footer className="site-footer">
          <span>Siar TV</span>
          <span>Katalog demo · Indonesia</span>
        </footer>
      </div>
    </div>
  );
}
