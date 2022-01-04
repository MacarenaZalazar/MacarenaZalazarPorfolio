import React from 'react';
import ContactLinks from '../../components/ContactLinks/ContactLinks';
import Footer from '../../components/Footer/Footer';
import { ContactCont } from './styles';
import profileImg from '../../utils/imgs/maca.jpg';
import {Image} from 'react-bootstrap'
import Arrows from '../Arrows/Arrows';


const Contact = () => {
    return (
        <ContactCont id='contact'>
            <div className='contact'>
                <div className='info'>
                    <ContactLinks/>
                    <Image src={profileImg} alt='profile-pic'  roundedCircle fluid />
                </div>
                <Arrows hrefUp='#nav'/>
            </div>
            <Footer/>
        </ContactCont>

    );
};

export default Contact;