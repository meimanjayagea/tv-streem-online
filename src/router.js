import React from 'react';
import { BrowserRouter as Switch, Routes, Route } from 'react-router-dom';
import App from '../src/App';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const AppRouter = () => {
  return (
    <Switch>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
      <Footer />
    </Switch>
  );
};

export default AppRouter;
