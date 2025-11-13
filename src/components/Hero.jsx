import React from 'react';

const Hero = () => {
  return (
    <section id='hero'>
      <div>
        <h1>MacBook Pro</h1>
        <img src='/title.png' alt='Macbook Title' />
        <video src='/videos/hero.mp4' autoPlay muted playsInline />
      </div>
    </section>
  );
};

export default Hero;
