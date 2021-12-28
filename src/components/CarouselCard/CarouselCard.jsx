import React, {useState} from 'react';
import {Fade, Image} from 'react-bootstrap'
import { CardDiv, TextDiv } from './styles';

const CarouselCard = ({title, description, img, url}) => {
    const [display, setDisplay] = useState(false)
    return (
        <CardDiv onMouseEnter={()=> setDisplay(true)} onMouseLeave={()=>setDisplay(false)}>
            <Image src={img} fluid/>
            <Fade in={display} mountOnEnter unmountOnExit>
                <TextDiv>
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <p>Visit: <a href={url} rel="noreferrer" target='_blank'>{url}</a></p>
                </TextDiv>  
            </Fade>
        </CardDiv>
    );
};

export default CarouselCard;