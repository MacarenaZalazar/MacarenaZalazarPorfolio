import React from 'react';
import { Card } from 'react-bootstrap';
import image from '../../utils/imgs/aboutImg.jpg'
import { AboutCont } from './styles';
const About = () => {
    return (
        <AboutCont id='about' img={image}>
            <div className='title'>
                <h1>Hi! I'm Macarena,</h1>
                <h1>Full Stack Developer, Teacher and Musician.</h1>
                  {/* <h4>I'm a proactive, creative and passionate person, 
                      looking for new challenges that allow me to grow both professionally and personally.</h4>   */}
            </div>
        </AboutCont>
    );
};

export default About;