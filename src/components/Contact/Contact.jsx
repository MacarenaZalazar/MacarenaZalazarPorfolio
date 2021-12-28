import React from 'react';
import ContactLinks from '../ContactLinks/ContactLinks';
import Footer from '../Footer/Footer';
import { ContactCont } from './styles';
import profileImg from '../../utils/imgs/maca.jpg';
import {Image} from 'react-bootstrap'

const Contact = () => {
    return (
        <ContactCont id='contact'>
            <div className='contact'>
                <h2>Reach me</h2>
                <div className='info'>
                    <ContactLinks/>
                    <Image src={profileImg} alt='profile-pic' height='150px' roundedCircle fluid/>
                </div>
            </div>
            <Footer/>
        </ContactCont>

    );
};

export default Contact;