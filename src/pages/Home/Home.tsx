import React, { FC, ReactElement } from 'react';
import './Home.css';
import { CategoryStyleOne, CategoryStyleTwo, Hero } from '../../components';

const heroData = {
  heading: 'GROCERIES DELIVERED',
  descripton:
    'We know how large objects will act, but things on a small scale just do not act that way.',
  buttonName: 'Start Now',
  imageUrl: 'hero.jpg',
};

const categoryStyleOneData = [
  {
    imageUrl: 'categoryStyleOne1.png',
    category: 'Ice Cream',
    productName: 'Haagau-Dass',
    linkName: 'ExploreMore',
    reDirectLink: '',
  },
  {
    imageUrl: 'categoryStyleOne2.png',
    category: 'Fruits',
    productName: 'Apple',
    linkName: 'ExploreMore',
    reDirectLink: '',
  },
  {
    imageUrl: 'categoryStyleOne3.png',
    category: 'Meat',
    productName: 'Chicken',
    linkName: 'ExploreMore',
    reDirectLink: '',
  },
];

const categoryStyleTwoData = {
  products: [
    {
      imageUrl: 'product1.png',
      categoryName: 'Ice Cream',
      productName: 'Ice',
      price: '250',
      discountPrice: '220',
    },
    {
      imageUrl: 'product2.png',
      categoryName: 'Fruits',
      productName: 'Apple',
      price: '250',
      discountPrice: '220',
    },
    {
      imageUrl: 'product3.png',
      categoryName: 'Meat',
      productName: 'Chicken',
      price: '250',
      discountPrice: '220',
    },
    {
      imageUrl: 'product3.png',
      categoryName: 'Ice Cream',
      productName: 'Ice',
      price: '250',
      discountPrice: '220',
    },
    {
      imageUrl: 'product1.png',
      categoryName: 'Fruits',
      productName: 'Apple',
      price: '250',
      discountPrice: '220',
    },
    {
      imageUrl: 'product2.png',
      categoryName: 'Meat',
      productName: 'Chicken',
      price: '250',
      discountPrice: '220',
    },
  ],
  categoryNames: ['Fruits', 'Vegetables', 'Meat'],
  heading: 'Most Selling',
};

const Home: FC = (): ReactElement => {
  return (
    <div className="home__main">
      <Hero {...heroData} />
      <CategoryStyleOne products={categoryStyleOneData} />
      <CategoryStyleTwo {...categoryStyleTwoData} />
    </div>
  );
};

export default Home;
