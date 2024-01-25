import './Hero.css';
import React, { FC, ReactElement } from 'react';

const Hero: FC = (): ReactElement => {
  return (
    <div className="hero__main">
      <div className="hero_main__content">
        <h1>GROCERIES DELIVERED</h1>
        <h4>
          We know how large objects will act, but things on a small scale just
          do not act that way.
        </h4>
        <button>
          <h3>Start Now</h3>
        </button>
      </div>
      <div className="hero_main__image">
        <img src="hero.jpg" alt="Loading Hero" />
      </div>
    </div>
  );
};

export default Hero;
