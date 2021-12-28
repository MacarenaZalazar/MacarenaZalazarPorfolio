import React from 'react';
import { ArrowsCont } from '../../utils/styleUtils';
import ArrowUp from '../../components/ArrowUp/ArrowUp';
import ArrowDown from '../../components/ArrowDown/ArrowDown';

const Arrows = ({hrefUp, hrefDown}) => {
    return (
        <ArrowsCont>
           {hrefUp && <ArrowUp href={hrefUp}/>}
           {hrefDown && <ArrowDown href={hrefDown}/>}
        </ArrowsCont>
    );
};

export default Arrows;