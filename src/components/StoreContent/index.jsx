import React from 'react';
import './style.scss'
import Product from '../Product';
import data from "./../../data";

export default function StorageContent() {

    const [headphones, wirelessHeadphones] = data

    const [headphonesData, setHeadphonesData] = React.useState(headphones)
    const [wirelessHeadphonesData, setWirelessHeadphonesData] = React.useState(wirelessHeadphones)
    console.log(headphonesData)

    const wiredProducts = headphonesData.map(item => {
        return (
            <Product 
                key={item.id}
                info={item}
            />
        )
    })

    const wirelessProducts = wirelessHeadphonesData.map(item => {
        return (
            <Product 
                key={item.id}
                info={item}
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