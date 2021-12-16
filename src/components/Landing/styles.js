import styled from "styled-components";
import { fadein } from '../../utils/animations';

export const LandingCont = styled.div`
background-image: url(${props => props.img});
background-size: cover;
background-repeat: no-repeat;
text-align: center;
height: 100%;
width:100%;
object-fit: contain;
box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.5);
display:flex;
flex-direction: column;
align-content: center;
    .title{
        animation: ${fadein} 2.5s;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        aling-self: center;
        justify-self: center;
    }
    h1{
        color: white;
        font-size: 40px;
    }
    h4{
        color: white
    }
    .arrow{
        padding: 4rem;
        justify-self: end;
    }

`