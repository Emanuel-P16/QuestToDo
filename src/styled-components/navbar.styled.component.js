import styled from 'styled-components';

export const NavbarStyle = styled.div`
margin: 1rem auto;
max-width: 620px;
height: 3rem;
background-color: transparent;
color:white;
display:flex;
flex-direction: row;
justify-content: center;

`;

export const NavBarSeparatorStyle = styled.div`
  display:flex;
  align-items:center;
  width:100%;
  height: 100%;
  justify-content: space-between  ;
  margin: 0 1rem;
`;

export const NavBarUserDivStyle = styled.div`
display:flex;
align-items:center;
justify-content:center;
height: 2rem;
`;
export const NavBarUserImgStyle = styled.img`
display:flex;
align-items:center;
justify-content:center;
height: 100%;
border-radius: .25rem;
`;

export const NavbarButtonStyle = styled.button`
border:none;
border-radius: 0;
width: 4rem;
height: 100%;
border-radius: .25rem;
background-color: var(--clr-pallete-3);

`;