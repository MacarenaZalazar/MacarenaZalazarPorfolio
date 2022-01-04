import styled from "styled-components";
import { fadein } from '../../utils/styleUtils';


export const CardDiv = styled.div`
    box-shadow: 2px 20px 54px 3px rgba(0,0,0,0.57);
    -webkit-box-shadow: 2px 20px 54px 3px rgba(0,0,0,0.57);
    -moz-box-shadow: 2px 20px 54px 3px rgba(0,0,0,0.57);
    img{
        filter: brightness(80%);
        -webkit-filter: brightness(80%);
        -moz-filter: brightness(80%);
        max-height: 450px;
        width: auto;
    }
    

`
export const TextDiv = styled.div`
    color: white;
    animation: ${fadein} 1s;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 100%;
    top:0;
    background: rgba(0,0,0,0.7);
    text-align: center;
    @media (max-width: 750px){
        h1{
           font-size: 1.3rem; 
        }
        p{
            font-size: 0.9rem;
        }
    }
    @media (max-width: 500px){
        h1{
           font-size: 1rem; 
        }
        p{
            font-size: 0.7rem;
        }
    }
    
    
`
