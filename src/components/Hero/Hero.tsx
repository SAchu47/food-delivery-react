import './Hero.css';
import React, { FC, ReactElement } from 'react';

interface IHero {
  heading: string;
  descripton: string;
  buttonName: string;
  imageUrl: string;
}

const Hero: FC<IHero> = (props): ReactElement => {
  return (
    <div className="hero__main">
      <div className="hero_main__content">
        <h1>{props.heading}</h1>
        <h4>{props.descripton}</h4>
        <button>
          <h3>{props.buttonName}</h3>
        </button>
      </div>
      <div className="hero_main__image">
        <img src={props.imageUrl} alt="Loading Hero" />
      </div>
    </div>
  );
};

export default Hero;
