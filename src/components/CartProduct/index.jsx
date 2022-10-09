import React from 'react';
import './style.scss'
import Count from '../Count'
import ButtonDelete from '../ButtonDelete';
import formatPrice from './../../priceFormatter';

export default function CartProduct({info, deleteCartProduct, increaseCount, decreaceCount}) {

    return (
        <div className='cart-product-container'>
            <div className='cart-product-image-and-count'>
                <div className='cart-product-image'>
                    <img src={`./img/products/${info.img}`} alt='Изображение' className='item-image'/>
                </div>
                <div className='cart-product-count'>
                    <Count countValue={info.count} increaseCount={increaseCount} decreaceCount={decreaceCount} id={info.id}/>
                </div>
            </div>
            <div className='cart-product-title-and-price'>
                <span className='cart-product-title'>{info.title}</span>
                <div className='cart-product-prices'>
                    <span className='cart-product-price'>{formatPrice(info.price)} ₽</span>
                </div>
            </div>
            <div className='cart-product-description'> 
                <div className='cart-product-delete-button'>
                    <ButtonDelete deleteCartProduct={deleteCartProduct} id={info.id}/>
                </div>
                <div className='cart-product-price'>
                    <span>{formatPrice(info.priceTotal)} ₽</span>
                </div>
            </div>
        </div>
    )
}