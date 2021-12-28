import React from 'react';
import { contactLinks } from '../../utils/englishData';
import {AiFillGithub, AiFillLinkedin, AiFillMail} from 'react-icons/ai'
import { LinksDiv } from './styles';

const ContactLinks = () => {
    return (
        <LinksDiv>
            <div className='link'>
                <h1><AiFillLinkedin/> </h1>
                <a href={contactLinks.linkedin}>in/macarenazalazar</a>
            </div>
            <div className='link'>
                <h1><AiFillGithub/> </h1>
                <a href={contactLinks.github}>/MacarenaZalazar</a>
            </div>
                <div className='link'>
            <h1><AiFillMail/> </h1>
                <a href={`mailto:${contactLinks.mail}`}>macarena.zalazar@gmail.com</a>
            </div>
        </LinksDiv>
    );
};

export default ContactLinks;