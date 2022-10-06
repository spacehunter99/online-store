import React from 'react';
import {Link} from 'react-router-dom';
import './style.scss'

export default function StoreHeader({chosenGoods}) {
    return (
        <nav className='navigation'>
            <div className='headerLogo'>
                <img src="./img/logos/header-logo.png" alt='main_logo'/>
            </div>
            <div className='likes-and-cart-logos'>
                <div className='heart-logo'>
                    <div className='heart-count-container'><span className='heart-counter'>2</span></div>
                </div>
                <Link to="/cart"><div className='cartLogo'>
                    <div className='cart-count-container'><span className='cart-counter'>{chosenGoods.length - 1}</span></div>
                </div></Link>
            </div>
        </nav>
    )
}