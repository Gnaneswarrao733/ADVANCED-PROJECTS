import React from 'react';
import Navbar from './Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <section id="home">
        <h2>Home Section</h2>
      </section>
      <section id="about">
        <h2>About Section</h2>
      </section>
      <section id="services">
        <h2>Services Section</h2>
      </section>
      <section id="contact">
        <h2>Contact Section</h2>
      </section>
    </div>
  );
};

export default App;
