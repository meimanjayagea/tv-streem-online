import React, { Fragment } from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Contents from './containers';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Contents />
      <Footer />
    </Fragment>
  );
}

export default App;
