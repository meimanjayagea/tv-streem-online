import React from 'react';
import { BrowserRouter as Switch, Routes, Route } from 'react-router-dom';
import Layout from '../layouts';


const AppRouter = () => {
  return (
    <Switch>
      <Layout>
        <Routes>
          <Route path="/" element={""} />
          <Route path="/live" element={""} />
        </Routes>
      </Layout>
    </Switch>
  );
};

export default AppRouter;
