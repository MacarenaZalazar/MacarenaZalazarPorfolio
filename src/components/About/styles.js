import styled from "styled-components";
import { fadein } from '../../utils/styleUtils';

export const AboutCont = styled.div`
    height: 100vh;
    width:100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3rem;
    animation: ${fadein} 1s;
    .description{
        text-align: start;
        background:rgba(0,0,0, 0.4);
        height: max-content;
        max-width: 70%;
        padding: 3rem;
        display: flex;
        flex-direction: column;
   
    }
`