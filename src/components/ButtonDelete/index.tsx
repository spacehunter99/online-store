import React from 'react';
import './style.scss'

interface ButtonDeleteProps {
    deleteCartProduct: (id: number) => void,
    id: number,
}

export default function ButtonDelete({deleteCartProduct, id}: ButtonDeleteProps) {
    return (
        <button className='delete-button' type='button' onClick={() => deleteCartProduct(id)}>
			<img src='./img/logos/delete-button.png' alt='delete' />
		</button>
    )
}