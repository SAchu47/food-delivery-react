import React, { FC, ReactElement } from 'react';
import './CategoryStyleTwo.css';

interface ICategoryStyleTwoProduct {
  imageUrl: string;
  categoryName: string;
  productName: string;
  price: string;
  discountPrice: string;
}

interface ICategoryStyleTwo {
  products: ICategoryStyleTwoProduct[];
  categoryNames: string[];
  heading: string;
  imageUrl: string;
  isImageLeftAligned: boolean;
}

const ProductComponent: FC<ICategoryStyleTwoProduct> = (
  props,
): ReactElement => {
  return (
    <div className="products">
      <div className="products__image">
        <img src={props.imageUrl} alt="" />
      </div>
      <div className="products__content">
        <h5>{props.productName}</h5>
        <h4>{props.categoryName}</h4>
        <div>
          <h5>{props.price}</h5>
          <h5>{props.discountPrice}</h5>
        </div>
      </div>
    </div>
  );
};

const CategoryStyleTwo: FC<ICategoryStyleTwo> = (props): ReactElement => {
  return (
    <div
      className={
        props.isImageLeftAligned
          ? 'category_style_two__main'
          : 'category_style_two_right__main'
      }
    >
      <div className="category_style_two__main__image">
        <img src={props.imageUrl} alt="" />
      </div>
      <div className="category_style_two__main__products">
        <div className="main__products__carousel">
          <div>
            <h5>{props.heading}</h5>
          </div>
          <div>
            {props.categoryNames.map((item: string, index) => {
              return <h6 key={index}>{item}</h6>;
            })}
          </div>
        </div>
        <div className="main__products__products">
          {props.products
            .slice(0, 3)
            .map((product: ICategoryStyleTwoProduct, index) => {
              return <ProductComponent {...product} key={index} />;
            })}
        </div>
        <div className="main__products__products">
          {props.products
            .slice(3, 6)
            .map((product: ICategoryStyleTwoProduct, index) => {
              return <ProductComponent {...product} key={index} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default CategoryStyleTwo;
