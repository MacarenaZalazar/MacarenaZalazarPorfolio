import React from 'react';
import { LandingCont } from './styles';
import NavBar from '../../components/Navbar/NavBar'
import Arrows from '../Arrows/Arrows';
import Icon from '../../components/Icon/Icon';

const Landing = () => {
    return (
        <LandingCont>
            <NavBar/>
            <div className='landingText'>
                <div className='title'>
                    <h1>hi there!<br/>  I'm <span>Macarena</span>,<br/>fullstack developer,<br/>teacher and musician.</h1>
                    <Icon/>
                </div>
                <Arrows hrefDown='#about'/>
            </div>
        </LandingCont>
    );
};

export default Landing;