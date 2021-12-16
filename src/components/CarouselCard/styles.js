import styled from "styled-components";
import { fadein } from '../../utils/animations';


export const CardDiv = styled.div`
    box-shadow: 2px 20px 54px 3px rgba(0,0,0,0.57);
    -webkit-box-shadow: 2px 20px 54px 3px rgba(0,0,0,0.57);
    -moz-box-shadow: 2px 20px 54px 3px rgba(0,0,0,0.57);
    img{
        filter: brightness(80%);
        -webkit-filter: brightness(80%);
        -moz-filter: brightness(80%);
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
    width: 100%;
    text-aling: center;
    align-items: center;
    justify-content: center;
    
`
