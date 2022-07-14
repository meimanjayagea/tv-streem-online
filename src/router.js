import React from 'react';
import { BrowserRouter as Switch, Routes, Route } from 'react-router-dom';
import App from '../src/App';

const AppRouter = () => {
  return (
    <Switch>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </Switch>
  );
};

export default AppRouter;
