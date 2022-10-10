import React from 'react';
import {Link} from 'react-router-dom';
import './style.scss'
import {ProductInfo} from '../../types/types'

interface StoreHeaderProps {
    chosenGoods: ProductInfo[],
}

export default function StoreHeader({chosenGoods}: StoreHeaderProps) {
    return (
        <nav className='navigation'>
            <Link to="/">
                <div className='headerLogo'>
                    <img src="./img/logos/header-logo.png" alt='main_logo'/>
                </div>
            </Link>
            <div className='likes-and-cart-logos'>
                <div className='heart-logo'>
                    <div className='heart-count-container'><span className='heart-counter'>2</span></div>
                </div>
                <Link to="/cart">
                    <div className='cartLogo'>
                        <div className='cart-count-container'><span className='cart-counter'>{chosenGoods.length - 1}</span></div>
                    </div>
                </Link>
            </div>
        </nav>
    )
}