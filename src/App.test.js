import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen, within } from '@testing-library/react';
import AppRouter from './router';

beforeEach(() => {
  localStorage.clear();
  window.history.replaceState(null, '', '/');
  window.scrollTo = jest.fn();
});

test('filters the catalog and preserves a favorite across navigation', () => {
  render(<AppRouter />);

  expect(screen.getByRole('heading', { name: 'Di Atas Awan Bromo' })).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: 'Olahraga' }));
  expect(screen.getAllByRole('article')).toHaveLength(1);
  fireEvent.click(screen.getByRole('button', { name: 'Favorit Arena' }));
  fireEvent.click(screen.getByRole('link', { name: 'Favorit', exact: true }));

  expect(screen.getByRole('heading', { name: 'Kanal favorit' })).toBeInTheDocument();
  const card = screen.getByRole('article');
  expect(within(card).getByRole('heading', { name: 'Arena' })).toBeInTheDocument();
  expect(JSON.parse(localStorage.getItem('siar-favorites'))).toEqual(['arena']);
});

test('searches program names from the global search', () => {
  render(<AppRouter />);

  fireEvent.change(screen.getByRole('searchbox'), { target: { value: 'senja' } });
  fireEvent.click(screen.getByRole('button', { name: 'Cari', exact: true }));

  expect(screen.getByRole('heading', { name: 'Hasil untuk “senja”' })).toBeInTheDocument();
  const card = screen.getByRole('article');
  expect(within(card).getByRole('heading', { name: 'Kota Hari Ini' })).toBeInTheDocument();
});
