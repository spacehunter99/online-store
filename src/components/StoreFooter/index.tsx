import React from 'react';
import './style.scss'

export default function StoreFooter() {
    return (
        <footer className='footer-container'>
            <div className='footer-main-logo'>
                <img src='./img/logos/header-logo.png' alt='footer-logo'/>
            </div>
            <div className='footer-links'>
                <ul className='footer-links-list'>
                    <li className='footer-links-list-item'>Избранное</li>
                    <li className='footer-links-list-item'>Корзина</li>
                    <li className='footer-links-list-item'>Контакты</li>
                </ul>
            </div>
            <div className='footer-service-conditions'>
                <div><p className='footer-service-conditions-title'>Условия сервиса</p></div>
                <div className='footer-local-logo'>
                    <div>
                        <img src='./img/logos/earth-logo.png' alt='earth-logo'/>
                    </div>
                    <span className='rus-local'>Рус</span>
                    <span>Eng</span>
                </div>
            </div>
            <div className='footer-social-logos'>
                <img src='./img/logos/social-logos.png' alt='social-logos'/>
            </div>
        </footer>
    )
}