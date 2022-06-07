import styled from 'styled-components'


export const LayoutMainStyle = styled.main`
    display:flex;
    flex-direction:column;
    margin: 2rem 2rem;
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
    width: 100%;
    height: 100%;
    margin:  auto auto;
    border: 1px solid var(--clr-pallete-3);
    background-color: var(--clr-pallete-1-rgba);
    
    /* width: 100%;
    height: 100%; */
    }
  `;

export const LayoutObjectiveContainerStyle = styled.article`
.titleQuests p{
  text-align: center;
  font-size: 2rem;
  border-bottom:2px solid var(--clr-pallete-3);
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
}
/* border: 2px solid var(--clr-pallete-3); */
margin-top: 4rem;
margin-left: 5rem;
margin-right: 5rem;
/* width: 100%;
height:100%;  */
  `;

export const FormStyle = styled.form`
input{
background-color: var(--clr-pallete-1-rgba);
border: 2px solid var(--clr-pallete-3-rgba);
color: var(--clr-pallete-3)
}
input:focus{
outline: none;
border: 2px solid var(--clr-pallete-3);
}
`;

export const GlobalButtonStyle = styled.button`
  background-color: var(--clr-pallete-3);
 &:hover{
    background-color: var(--clr-pallete-4)
  }
`
export const GlobalSelectStyle = styled.select`
  background-color: var(--clr-pallete-3);
  &:hover{
    background-color: var(--clr-pallete-4)
  }
`