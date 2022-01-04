import styled from "styled-components";

export const TechnologiesCont = styled.div`
    height: 100vh;
    width:100%;
    display: flex;
    padding: 3rem;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`
export const ItemsCont = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 3rem;
    @media(max-width: 800px){
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 2rem;
    }
`
export const Item = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media(max-width: 700px){
        h2{
            font-size: 1.3rem;
        }
    }
`