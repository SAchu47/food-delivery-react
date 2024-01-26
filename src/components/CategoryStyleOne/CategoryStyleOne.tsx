import React, { FC, ReactElement } from 'react';
import './CategoryStyleOne.css';

interface ICategoryProduct {
  imageUrl: string;
  category: string;
  productName: string;
  linkName: string;
  reDirectLink: string;
}

interface ICategoryStyleOne {
  products: ICategoryProduct[];
}

const ProductComponent: FC<ICategoryProduct> = (props): ReactElement => {
  return (
    <div className="category__product">
      <div className="category_product__content">
        <h6>{props.category}</h6>
        <h3>{props.productName}</h3>
        <h6>{props.linkName}</h6>
      </div>
      <div className="category_product__image">
        <img src={props.imageUrl} alt="" />
      </div>
    </div>
  );
};

const CategoryStyleOne: FC<ICategoryStyleOne> = (props): ReactElement => {
  return (
    <div className="category_product__main">
      {props.products.map((item: ICategoryProduct, index) => {
        return <ProductComponent {...item} key={index} />;
      })}
    </div>
  );
};

export default CategoryStyleOne;
