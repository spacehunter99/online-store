import React from 'react';
import './style.scss'
import CartProduct from '../CartProduct';

export default function CartContent({cartData}) {
    
    const [allCartData, setAllCartData] = React.useState(cartData)
    console.log(allCartData)

    const cartProduct = allCartData.map(item => {
        return (
            <CartProduct 
                key={item["id"]}
                info={item}
            />
        );
    })


    return (
        <div className='cart-content-container'>
            {cartProduct}
        </div>
    )
}