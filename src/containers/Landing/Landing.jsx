import React from 'react';
import { LandingCont } from './styles';
import NavBar from '../../components/Navbar/NavBar'
import Arrows from '../Arrows/Arrows';
import {VscTerminalCmd} from 'react-icons/vsc'

const Landing = () => {
    return (
        <LandingCont>
            <NavBar/>
            <div className='landingText'>
                <div className='title'>
                    <h1>hi there!<br/>  I'm <span>Macarena</span>,<br/>fullstack developer,<br/>teacher and musician.</h1>
                    <h1 className='icon'><VscTerminalCmd/> </h1>
                </div>
                <Arrows hrefDown='#about'/>
            </div>
        </LandingCont>
    );
};

export default Landing;