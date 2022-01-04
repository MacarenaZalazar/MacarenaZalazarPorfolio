import styled from "styled-components";

export const ContactCont = styled.div`
    height: 100vh;
    .content{
        display:flex;
        justify-content: space-around;
        align-items: center;
        @media (max-width: 800px) {
          flex-direction: column;
         }   
    }
    .contact{
        padding:3rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
        min-height: 93%;
        img{
            max-height: 350px;
            padding: 1rem;
            @media (max-width: 800px) {
                max-height: 250px;
             }
        }
        .info{
            background: rgba(0,0,0,0.5);
            height:100%;
            padding: 1rem;
            display:flex;
            justify-content: center;
            align-items: center;
            padding:1rem;
            @media (max-width: 800px) {
                flex-direction: column-reverse;
             }
            
        }

    }
`