import React from 'react';
import { BrowserRouter as Switch, Routes, Route } from 'react-router-dom';
import App from '../src/App';
import Navbar from './components/Navbar';

const AppRouter = () => {
  return (
    <Switch>
      <Navbar>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </Navbar>
    </Switch>
  );
};

export default AppRouter;
