import styled from "styled-components";

export const LinksDiv = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    .link{
        display:flex;
        align-items: center;
       
        a{
            font-size: 1.2rem;
            text-decoration: none;
            padding: 0 2rem;
            @media (max-width: 500px) {
                font-size: 1rem;
             }
    
        }
    }
`