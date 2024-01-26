import React, { FC, ReactElement } from 'react';
import './MediaWithProduct.css';

interface IMediaWithProduct {
  heading: string;
  discription: string;
  imageUrl: string;
  productName: string;
  productImageUrl: string;
  price: string;
  discountPrice: string;
  isImageLeftAligned: boolean;
}

const MediaWithProduct: FC<IMediaWithProduct> = (props): ReactElement => {
  return (
    <div
      className={
        props.isImageLeftAligned
          ? 'media_with_product__main'
          : 'media_with_product_right__main'
      }
    >
      <div className="media_with_product__main__media">
        <img src={props.imageUrl} alt="" />
      </div>
      <div className="media_with_product__main__product">
        <h3>{props.heading}</h3>
        <p>{props.discription}</p>
        <div className="main__product__image">
          <img src={props.productImageUrl} alt="" />
        </div>
        <h6>{props.productName}</h6>
        <div className="main__product__prices">
          <h5>{props.price}</h5>
          <h5>{props.discountPrice}</h5>
        </div>
      </div>
    </div>
  );
};

export default MediaWithProduct;
