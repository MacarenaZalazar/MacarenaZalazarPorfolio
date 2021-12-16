import React from 'react';
import { Carousel } from 'react-bootstrap';
import { projectDetails } from '../../utils/englishData';
import CarouselCard from '../CarouselCard/CarouselCard';
import { ProjectsDiv } from './styles';
import ArrowDown from '../ArrowDown/ArrowDown';


const Projects = () => {
    return (
        <ProjectsDiv id='projects'>
            <h1>Here're some of my projects</h1>
            <Carousel>
                {
                    projectDetails.map((e, idx) => {
                    return  <Carousel.Item key={idx}>
                                <CarouselCard img={e.img} title={e.title} description={e.description} url={e.url} />
                            </Carousel.Item>
                    })
                }
            </Carousel>
            <ArrowDown href='#studies'/>
        </ProjectsDiv>
    );
};

export default Projects;