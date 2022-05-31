import styled from 'styled-components'

export const QuestLayout = styled.div`
margin-bottom: 1rem;
`;

export const QuestButtonExpandLayout = styled.button`
width: 100%;
height: 100%;
color: var(--clr-grey-1);
border: none;
background-color: transparent;
text-align: left;
&:hover{
    background-color: transparent;

}
`;

export const Questcontainer = styled.div`
width: 95%;
margin-top: 1rem;
margin-left: 0.5rem;
margin-right: 10rem;
background-color: transparent;
border: none;
border-radius: 0;
margin-bottom: 0.5rem;
&:focus{
    border:2px var(--clr-grey-1) solid; 
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(70,57,14,0.7651260333234856) 0%, rgba(106,99,75,0.6698879380853904) 0%, rgba(233,233,233,0) 24%);
}  
`;