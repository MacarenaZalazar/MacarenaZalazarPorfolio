import React from 'react';
import {BiUpArrow} from 'react-icons/bi'

const ArrowUp = ({href}) => {
    return (
        <div className='arrow'>
            <a href={href}>
                <h1><BiUpArrow/></h1>
            </a>
        </div>
    );
};

export default ArrowUp;