import styled from 'styled-components'


export const LayoutMainStyle = styled.main`
   
    display:flex;
    flex-direction:column;
    width: 100%;
    justify-content:center;
    align-items:center;

`
export const LayoutSectionStyle = styled.section`
  display: flex;
  width: 100%;
 
`

export const LayoutGridStyle = styled.div`
  
  justify-content:center;
    align-items:center;
    width:100%;
    @media only screen and (min-width: 1200px) {
       display: grid;
      grid-template-columns: 1fr 1fr;   
    }
`;

export const LayoutQuestContainer = styled.section`
  margin: 2rem;
`