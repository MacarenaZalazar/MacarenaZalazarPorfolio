import styled from "styled-components";
import { fadein } from '../../utils/styleUtils';

export const AboutCont = styled.div`
    height: 100vh;
    width:100%;
    display:flex;
    align-items: center;
    justify-content: space-around;
    padding: 3rem;
    animation: ${fadein} 1s;
    flex-direction: column;
    @media (max-width: 650px){
        padding:1rem;
    }
    .description{
        text-align: start;
        background:rgba(0,0,0, 0.4);
        height: max-content;
        max-width: 80%;
        padding: 3rem;
        display: flex;
        flex-direction: column;
        @media (max-width: 650px){
            padding: 1rem;
            max-width: 95%;
            p{
                font-size:0.9rem;
            }
        }
   
    }
`