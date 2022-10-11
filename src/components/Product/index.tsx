import React from 'react';
import './style.scss';
import {ProductInfo} from '../../types/types';

type ProductProps = {
    info: ProductInfo;
    addToCart: (info: ProductInfo, event:React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Product: React.FC<ProductProps> = ({info, addToCart}) => {
    return (
        <div className='product-container'>
            <div className='product-image'>
                <img src={`./img/products/${info.img}`} alt='Изображение'/>
            </div>
            <div className='product-description'> 
                <div className='product-title-and-price'>
                    <span className='product-title'>{info.title}</span>
                    <div className='product-prices'>
                        <span className='product-price'>{info.price} ₽</span>
                        <span className='product-old-price'>{info.oldPrice ? info.oldPrice + " ₽": ""}</span>
                    </div>
                </div>
                <div className='product-rating-and-button'>
                    <div className='product-rating-and-button-group'>
                        <div><img src='./img/logos/star.png' alt='rate-star'/></div>
                        <span className='product-rating'>{info.rate}</span>
                    </div>
                    <button className='product-button' onClick={(event) => addToCart(info, event)}>Купить</button>
                </div>
            </div>
        </div>
    )
}

export default Product;