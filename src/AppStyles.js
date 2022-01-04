import styled from "styled-components";

export const AppDiv = styled.div`
   background-image: url('./static/media/aboutImg.03ac211d.jpg');
   background-size: cover;
   background-repeat: no-repeat;
   text-align: center;
   object-fit: contain;
   box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.5);
   color: white;
   margin: 0;
   h1{
      @media (max-width: 700px) {
         font-size: 1.5rem;
      }
    }
    p{
       font-size: 1.3rem;
       margin: 0;
      @media (max-width: 750px) {
         font-size: 1rem;
      }
    }
    a{
      color: white;
   }
`
export const Loading = styled.div`
   background-color: black;
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
`
