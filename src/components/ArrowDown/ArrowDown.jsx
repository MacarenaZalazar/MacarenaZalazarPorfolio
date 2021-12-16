import React from 'react';
import {BiDownArrow} from 'react-icons/bi'

const ArrowDown = ({href}) => {
    return (
        <div className='arrow'>
            <a href={href}>
                <h1><BiDownArrow/></h1>
            </a>
        </div>
    );
};

export default ArrowDown;