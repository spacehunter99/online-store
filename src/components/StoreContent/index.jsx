import React from 'react';
import './style.scss'
import Product from '../Product';

export default function StorageContent({addToCart, headphonesData, wirelessHeadphonesData}) {

    const wiredProducts = headphonesData.map(item => {
        return (
            <Product 
                key={item.id}
                info={item}
                addToCart={addToCart}
            />
        )
    })

    const wirelessProducts = wirelessHeadphonesData.map(item => {
        return (
            <Product 
                key={item.id}
                info={item}
                // addToCart={addToCart}
            />
        )
    })

    return (
        <div className='content-container'>
            <div className='content-container-category'>
                <h2>Наушники</h2>
                <div className='content-container-list'>
                    {wiredProducts}
                </div>
            </div>
            <div className='content-container-category'>
                <h2>Беспроводные наушники</h2>
                <div className='content-container-list'>
                    {wirelessProducts}
                </div>
            </div>
        </div>
    )
}