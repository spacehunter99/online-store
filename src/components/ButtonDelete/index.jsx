import React from 'react';
import './style.scss'

export default function ButtonDelete({deleteCartProduct, id}) {
    return (
        <button className='delete-button' type='button' onClick={() => deleteCartProduct(id)}>
			<img src='./img/logos/delete-button.png' alt='delete' />
		</button>
    )
}