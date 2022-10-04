import React from 'react';
import './style.scss'

export default function Product({info}) {
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
                    <div>
                        <img src='./img/logos/star.png' alt='rate-star'/>
                        <span className='product-rating'>{info.rate}</span>
                    </div>
                    <button>Купить</button>
                </div>
            </div>
        </div>
    )
}