import React from 'react';
import './style.scss'

export default function StoreHeader() {
    return (
        <nav className='navigation'>
            <div className='headerLogo'>
                <img src="./img/logos/header-logo.png" alt='main_logo'/>
            </div>
            <div>
                <img src='./img/logos/heart-logo.png' alt='likes_logo' className='heartLogo'/>
                <img src='./img/logos/cart-logo.png' alt='cart_logo' className='cartLogo'/>
            </div>
        </nav>
    )
}