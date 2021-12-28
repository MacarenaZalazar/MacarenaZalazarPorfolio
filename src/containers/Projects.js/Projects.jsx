import React from 'react';
import { Carousel } from 'react-bootstrap';
import { projectDetails } from '../../utils/englishData';
import CarouselCard from '../../components/CarouselCard/CarouselCard';
import { ProjectsDiv } from './styles';
import ArrowDown from '../../components/ArrowDown/ArrowDown';
import ArrowUp from '../../components/ArrowUp/ArrowUp';
import { ArrowsCont } from '../../utils/styleUtils';


const Projects = () => {
    return (
        <ProjectsDiv id='projects'>
            <h1>Here're some of my projects</h1>
            <Carousel slide={false}>
                {
                    projectDetails.map((e, idx) => {
                    return  <Carousel.Item key={idx}>
                                <CarouselCard img={e.img} title={e.title} description={e.description} url={e.url} />
                            </Carousel.Item>
                    })
                }
            </Carousel>
            <ArrowsCont>
                <ArrowDown href='#contact'/>
                <ArrowUp href='#technologies'/>
            </ArrowsCont>
        </ProjectsDiv>
    );
};

export default Projects;