import React from 'react';
import { TechnologiesCont } from './styles';
import {DiReact} from 'react-icons/di'
import Arrows from '../Arrows/Arrows';


const Technologies = () => {
    return (
        <TechnologiesCont id='technologies'>

            <h1><DiReact/></h1>
            <Arrows hrefUp='#about' hrefDown='#contact'/>
        </TechnologiesCont>
    );
};

export default Technologies;