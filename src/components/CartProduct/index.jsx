import React from 'react';
import './style.scss'
import Count from '../Count'
import ButtonDelete from '../ButtonDelete';

export default function CartProduct({info}) {
    return (
        <div className='cart-product-container'>
            <div className='cart-product-image'>
                <img src={`./img/products/${info.img}`} alt='Изображение'/>
            </div>
            <div className='cart-product-description'> 
                <div className='cart-product-title-and-price'>
                    <span className='cart-product-title'>{info.title}</span>
                    <div className='cart-product-prices'>
                        <span className='cart-product-price'>{info.price} ₽</span>
                        <span className='cart-product-old-price'>{info.oldPrice ? info.oldPrice + " ₽": ""}</span>
                    </div>
                </div>
                <div className='cart-product-count'>
                    <Count />
                </div>
                <div className='cart-product-price'>
                    Общая сумма ₽
                </div>
                <div className='cart-product-delete-button'>
                    <ButtonDelete />
                </div>
            </div>
        </div>
    )
}