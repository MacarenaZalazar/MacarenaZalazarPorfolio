import React from 'react';
import { Carousel } from 'react-bootstrap';
import { projectDetails } from '../../utils/englishData';
import CarouselCard from '../../components/CarouselCard/CarouselCard';
import { ProjectsDiv } from './styles';
import Arrows from '../Arrows/Arrows';


const Projects = () => {
    return (
        <ProjectsDiv id='projects'>
            <Carousel slide={false}>
                {
                    projectDetails.map((e, idx) => {
                    return  <Carousel.Item key={idx}>
                                <CarouselCard img={e.img} title={e.title} description={e.description} url={e.url} />
                            </Carousel.Item>
                    })
                }
            </Carousel>
            <Arrows hrefUp='#technologies' hrefDown='#contact' />
        </ProjectsDiv>
    );
};

export default Projects;