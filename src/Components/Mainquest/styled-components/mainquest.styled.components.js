import styled from 'styled-components'

export const QuestLayout = styled.div`
margin-bottom: 1rem;
p{
    color:var(--clr-pallete-3);
}
`;

export const QuestButtonExpandLayout = styled.button`
width: 100%;
height: 100%;
border: none;
border-radius:0px;
border-bottom: 2px solid var(--clr-pallete-3); 
background-color: transparent;
text-align: center;
&:hover{
    background-color: transparent;
}
h3{
    color: var(--clr-pallete-3);
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
border:2px var(--clr-pallete-3-rgba) solid; 
background: var(--clr-pallete-1-rgba);
&:focus{
    border:3px var(--clr-pallete-3) solid; 
    /* background: rgb(2,0,36); */
    /* background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(70,57,14,0.7651260333234856) 0%, rgba(106,99,75,0.6698879380853904) 0%, rgba(233,233,233,0) 24%); */
}  
`;  

export const LayoutObjectiveQuestStyle = styled.div`
display:block;
    @media only screen and (min-width: 1200px){
    display:none;
    }
`;

export const Questarticle = styled.article`
    margin-left: 1rem;
    margin-bottom: 0.25rem;
    p{
        margin-bottom: 0.50rem;
        margin-left: 1rem;
    }
`

export const ButtonQuests = styled.div`
margin-left: 1rem;
margin-top: 0.5rem;  
`;