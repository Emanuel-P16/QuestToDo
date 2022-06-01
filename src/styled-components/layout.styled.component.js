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
    margin-top: 2rem;   
    width: 95%;
    border: var(--clr-grey-1) solid 1px;
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