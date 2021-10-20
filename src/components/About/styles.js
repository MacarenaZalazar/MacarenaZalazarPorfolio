import styled from "styled-components";

export const AboutCont = styled.div`
background-image: url(${props => props.img});
background-size: cover;
background-repeat: no-repeat;
text-align: center;
height: 100vh;
width:100%;
object-fit: contain;
box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.5);
display:flex;
flex-direction: column;
align-content: center;
justify-content:center;
.title{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
   // text-align: justify;
}
h1{
    color: white;
    font-size: 40px;
}
h4{
    color: white
}
`