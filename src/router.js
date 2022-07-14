import React from 'react';
import { BrowserRouter as Switch, Routes, Route } from 'react-router-dom';
import Containers from './App';
import Home from './containers/Home';
import Live from './containers/Live';

const AppRouter = () => {
  return (
    <Switch>
      <Containers>
        <Routes>
          <Route path="/" element={Home} />
          <Route path="/live" element={Live} />
        </Routes>
      </Containers>
    </Switch>
  );
};

export default AppRouter;
