import React from 'react';
import './style.scss'
import CartProduct from '../CartProduct';

export default function CartContent({cartData}) {
    
    const [allCartData, setAllCartData] = React.useState(cartData)
    console.log(allCartData)

    function deleteCartProduct(id) {
        setAllCartData(prevState => prevState.filter(item => id !== item.id))
    }

    function increaseCount(id) {
        setAllCartData(prevState => {
            return prevState.map(item => {
                if (item.id === id) {
                    return {
                        ...item,
                        count: item.count + 1,
                        priceTotal: (item.count + 1) * item.price,
                    }
                }
                return item
            })
        })
    }

    function decreaceCount(id) {
        setAllCartData(prevState => {
            return prevState.map(item => {
                if (item.id === id) {
                    const updatedCount = item.count - 1 > 1 ? item.count - 1 : 1

                    return {
                        ...item,
                        count: updatedCount,
                        priceTotal: updatedCount * item.price,
                    }
                }
                return item
            })
        })
    }

    const cartProduct = allCartData.map(item => {
        return (
            <CartProduct 
                key={item["id"]}
                info={item}
                deleteCartProduct={deleteCartProduct}
                increaseCount={increaseCount}
                decreaceCount={decreaceCount}
            />
        );
    })


    return (
        <div className='cart-content-container'>
            {cartProduct}
        </div>
    )
}