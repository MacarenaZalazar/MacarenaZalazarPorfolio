import styled from "styled-components";

export const AppDiv = styled.div`
    color: white;
    background: black;
    margin: 0;
    h1{
      @media (max-width: 500px) {
         font-size: 1.8rem;
      }
    }
    p{
       font-size: 1.3rem;
       margin: 0;
      @media (max-width: 500px) {
         font-size: 1rem;
      }
    }
    a{
      color: white;
   }
`
