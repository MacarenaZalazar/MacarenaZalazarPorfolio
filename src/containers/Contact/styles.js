import styled from "styled-components";

export const ContactCont = styled.div`
    height: 100vh;
    background: rgba(43,36,37,1);
    .contact{
        padding:3rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
        min-height: 93%;
   
        img{
            padding: 1rem;
  
        }
        .info{
            background: rgba(0,0,0,0.5);
            height:100%;
            padding: 1rem;
            display:flex;
            justify-content: center;
            align-items: center;
            padding:1rem;
            @media (max-width: 1000px) {
                flex-direction: column-reverse;
             }
            
        }

    }
`