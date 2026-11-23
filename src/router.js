import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import App from './App';

export default function AppRouter() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route path="/" element={<App page="home" />} />
        <Route path="/live/:channelId?" element={<App page="live" />} />
        <Route path="/channels" element={<App page="channels" />} />
        <Route path="/guide" element={<App page="guide" />} />
        <Route path="/favorites" element={<App page="favorites" />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
