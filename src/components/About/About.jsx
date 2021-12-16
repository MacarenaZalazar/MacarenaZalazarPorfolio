import React from 'react';

import { AboutCont } from './styles';

import { aboutMe } from '../../utils/englishData';
import ArrowDown from '../ArrowDown/ArrowDown';
const About = () => {
    return (
        <AboutCont id='about'>
                <div className='description'>
                    {aboutMe.map((e, idx) => <p key={idx}>{e}</p>) }
                </div>
                <ArrowDown href='#projects'/>
        </AboutCont>
    );
};

export default About;