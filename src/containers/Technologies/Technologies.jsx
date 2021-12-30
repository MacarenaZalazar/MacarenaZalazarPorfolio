import React from 'react';
import { TechnologiesCont, Item, ItemsCont } from './styles';
import {DiReact, DiCss3, DiMongodb, DiBootstrap} from 'react-icons/di';
import {SiRedux, SiJavascript, SiHtml5, SiPostgresql} from 'react-icons/si';
import {FaNodeJs, FaGitAlt} from 'react-icons/fa';
import Arrows from '../Arrows/Arrows';


const Technologies = () => {
    return (
        <TechnologiesCont id='technologies'>
            <ItemsCont>
                <Item>
                    <h1><SiHtml5/></h1>
                    <h2>HTML</h2>
                </Item>
                <Item>
                    <h1><DiCss3/></h1>
                    <h2>CSS</h2>
                </Item>
                <Item>
                    <h1><DiBootstrap/></h1>
                    <h2>Bootstrap</h2>
                </Item>
                <Item>
                    <h1><DiReact/></h1>
                    <h2>React</h2>
                </Item>
                <Item>
                    <h1><SiRedux/></h1>
                    <h2>Redux</h2>
                </Item>
                <Item>
                    <h1><SiJavascript/></h1>
                    <h2>Javascript</h2>
                </Item>
                <Item>
                    <h1><FaNodeJs/></h1>
                    <h2>Node</h2>
                </Item>
                <Item>
                    <h1><FaNodeJs/></h1>
                    <h2>Express</h2>
                </Item>
                <Item>
                    <h1><FaNodeJs/></h1>
                    <h2>Secuelize</h2>
                </Item>
                <Item>
                    <h1><FaGitAlt/></h1>
                    <h2>Git</h2>
                </Item>
                <Item>
                    <h1><SiPostgresql/></h1>
                    <h2>Postgresql</h2>
                </Item>
                <Item>
                    <h1><DiMongodb/></h1>
                    <h2>Mongo</h2>
                </Item>
       
            </ItemsCont>
            <Arrows hrefUp='#about' hrefDown='#projects'/>
        </TechnologiesCont>
    );
};

export default Technologies;