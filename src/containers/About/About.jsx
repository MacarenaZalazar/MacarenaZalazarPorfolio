import React from 'react';
import { AboutCont } from './styles';
import { aboutMe } from '../../utils/englishData';
import Arrows from '../Arrows/Arrows';
const About = () => {
    return (
        <AboutCont id='about'>
                <div className='description'>
                    {aboutMe.map((e, idx) => <p key={idx}>{e}</p>) }
                </div>
            <Arrows hrefUp='#nav' hrefDown='#technologies'/>
        </AboutCont>
    );
};

export default About;