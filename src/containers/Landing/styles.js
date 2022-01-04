import styled from "styled-components";
import { fadein } from '../../utils/styleUtils';

export const LandingCont = styled.div`
width:100%;
display:flex;
flex-direction: column;
height: 100vh;
    .landingText{
        padding: 3rem;
        height: 100%;
        animation: ${fadein} 2.5s;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;

        .title{
            width: 100%;
            display: flex;
            text-align: left;  
            align-items: center; 
            justify-content: space-around;
            .icon{
                padding: 3rem;
                font-size: 60px;
            }         
        }
        h1{
            color: white;
            font-size: 40px;
            @media (max-width: 700px) {
                font-size: 2rem;
             }
        }
        h4{
            color: white
        }
    }
`