import React from 'react';
import ArrowDown from '../ArrowDown/ArrowDown';
import { LandingCont } from './styles';
import image from '../../utils/imgs/aboutImg.jpg'
import NavBar from '../Navbar/NavBar';
import About from '../../containers/About/About'

const Landing = () => {
    return (
        <LandingCont img={image} >
            <NavBar/>
            <div className='title'>
                <h1>Hi! I'm Macarena,</h1>
                <h1>Full Stack Developer, Teacher and Musician.</h1>
                <ArrowDown href='#about'/>
            </div>
            <About/>
        </LandingCont>
    );
};

export default Landing;