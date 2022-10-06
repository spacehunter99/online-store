import React from 'react';
import './style.scss'

export default function Count({countValue, increaseCount, decreaceCount, id}) {


    return (
        <div className='count'>
            <div>
                <button type='button' className='count-down' onClick={() => decreaceCount(id)}>
					<img src='./img/logos/count-down.png' alt='decrease' />
				</button>
            </div>
            <div className='count-value'>
                <span className='count-value-span'>{countValue}</span>
            </div>
            <div>
                <button type='button' className='count-up' onClick={() => increaseCount(id)}>
					<img src='./img/logos/count-up.png' alt='increase' />
				</button>
            </div>
        </div>
    )
}