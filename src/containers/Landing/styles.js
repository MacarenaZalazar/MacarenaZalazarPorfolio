import styled from "styled-components";
import { fadein } from '../../utils/styleUtils';

export const LandingCont = styled.div`
width:100%;
display:flex;
flex-direction: column;
align-content: center;
height: 100vh;
    .landingText{
        padding: 3rem;
        height: 100%;
        animation: ${fadein} 2.5s;
        display: flex;
        align-items: center;
        justify-content:center;
        .title{
            padding: 3rem;
            text-align: left;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            justify-self: center;
        }
        h1{
            color: white;
            font-size: 40px;
        }
        h4{
            color: white
        }
    }
    .arrow{
        animation: ${fadein} 3.5s;
        padding: 4rem;
        justify-self: end;
    }

`