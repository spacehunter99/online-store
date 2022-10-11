import React from 'react';
import './style.scss';

type ButtonDeleteProps = {
    deleteCartProduct: (id: number) => void;
    id: number;
}

const ButtonDelete: React.FC<ButtonDeleteProps> = ({deleteCartProduct, id}) => {
    return (
        <button className='delete-button' type='button' onClick={() => deleteCartProduct(id)}>
			<img src='./img/logos/delete-button.png' alt='delete' />
		</button>
    )
}

export default ButtonDelete;