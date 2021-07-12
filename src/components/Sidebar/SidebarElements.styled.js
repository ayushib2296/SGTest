import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const SidebarContainer = styled.aside`
position: fixed; 
z-index: 999;
height: 100%;
width: 100%;
background: #ffdac9;
display: grid;
align-items: center;
top: 0;
left: 0;
transition: 0.3s ease-in-out;
opacity: ${({isOpen})=>(isOpen ? '100%': '0')};
top: ${({isOpen})=>(isOpen? '0': '-100%' )};
`

export const CloseIcon = styled(FaTimes)`
color: #333333;
`

export const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
`;

export const SidebarWrapper = styled.div`
color: #333333;
`;

export const SidebarMenu = styled.ul`
display: grid; 
grid-template-column: 1fr;
grid-template-rows: repeat(6, 80px);
text-align: center; 

@media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
}
`

export const SidebarLink = styled(LinkS)`
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
text-decoration: none;
list-style: none;
transition: 0.2s ease-in-out;
color: #333333;
cursor: pointer;

&:hover {
    color: #333333;
    transition: 0.2s ease-in-out;
}
`

export const LoginBtnWrap = styled.div`
display: flex; 
justify-content: center; 
`;

export const LoginBtnRoute = styled(LinkR)`
border-radius: 50px;
background: #333333;
white-space: nowrap;
padding: 16px 64px;
color: white;
font-size: 16px; 
outline: none;
border: none;
cursor: pointer; 
transition: all 0.2s ease-in-out;
text-decoration: none; 
margin-left: 44px;

&:hover {
    transition: all 0.2s ease-in-out;
    background: #333333;
    color: white;
}
`


