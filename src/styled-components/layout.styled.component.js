import styled from 'styled-components'


export const LayoutMainStyle = styled.main`
    display:flex;
    flex-direction:column;
    margin: 4rem 2rem;
    padding: 4rem 0;
    width: 95%;
    justify-content:center;
    align-items:center;
    border: 3px solid var(--clr-pallete-3);
    background-color: var(--clr-pallete-3-rgba);
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
    margin-top: 2rem;   
    width: 95%;
    /* border: var(--clr-grey-1) solid 1px; */
    }
`;

export const LayoutQuestContainer = styled.section`
  margin: 0rem 2rem;
  height: 100%;
  border: var(--clr-grey-1) solid 1px;
  @media only screen and (min-width: 1200px ){
    border: none;
  }
  `

export const LayoutObjectiveStandAloneStyle = styled.div`
    display:none;
    @media only screen and (min-width: 1200px){
    display:block;
    }
  `;

export const LayoutObjectiveContainerStyle = styled.article`
 
  `;

export const GlobalButtonStyle = styled.button`
  background-color: var(--clr-pallete-3);
`
export const GlobalSelectStyle = styled.select`
  background-color: var(--clr-pallete-3);
`