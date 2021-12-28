import React from 'react';

import { AboutCont } from './styles';
import { aboutMe } from '../../utils/englishData';
import ArrowDown from '../ArrowDown/ArrowDown';
import ArrowUp from '../ArrowUp/ArrowUp';
import { ArrowsCont } from '../../utils/styleUtils';
const About = () => {
    return (
        <AboutCont id='about'>
                <div className='description'>
                    {aboutMe.map((e, idx) => <p key={idx}>{e}</p>) }
                </div>
                <ArrowsCont>
                    <ArrowDown href='#projects'/>
                    <ArrowUp href='#nav'/>
                </ArrowsCont>
        </AboutCont>
    );
};

export default About;