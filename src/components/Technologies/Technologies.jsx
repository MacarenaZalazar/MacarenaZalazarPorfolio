import React from 'react';
import { TechnologiesCont } from './styles';
import ArrowUp from '../ArrowUp/ArrowUp';
import ArrowDown from '../ArrowDown/ArrowDown';
import { ArrowsCont } from '../../utils/styleUtils';

const Technologies = () => {
    return (
        <TechnologiesCont id='technologies'>
            <p>My Technologies</p>
            <ArrowsCont>
                <ArrowDown href='#projects'/>
                <ArrowUp href='#about'/>
            </ArrowsCont>
        </TechnologiesCont>
    );
};

export default Technologies;