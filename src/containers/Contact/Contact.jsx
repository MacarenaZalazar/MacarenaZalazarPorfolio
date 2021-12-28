import React from 'react';
import ContactLinks from '../../components/ContactLinks/ContactLinks';
import Footer from '../../components/Footer/Footer';
import { ContactCont } from './styles';
import profileImg from '../../utils/imgs/maca.jpg';
import {Image} from 'react-bootstrap'
import ArrowUp from '../../components/ArrowUp/ArrowUp';


const Contact = () => {
    return (
        <ContactCont id='contact'>
            <div className='contact'>
                <div className='info'>
                    <ContactLinks/>
                    <Image src={profileImg} alt='profile-pic'  roundedCircle fluid />
                </div>
            <div>
                <ArrowUp href='#nav'/>
            </div>
            </div>
            <Footer/>
        </ContactCont>

    );
};

export default Contact;