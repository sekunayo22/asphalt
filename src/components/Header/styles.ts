import styled from "@emotion/styled";
import { colWhite } from "../../styles/abstracts/variables";

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
`

export const Logo = styled.div`
    width: 70px;
    height: 70px;

    & img{
        max-width: 100%;
        height: 100%;
    }
`

export const Nav = styled.nav`
`
export const NavList = styled.ul`
    display: flex;
    list-style: none;
    gap: 2rem;
    margin: 0;
    padding: 0;
`

export const NavItem = styled.li`
    font-weight: 400;
    color: ${colWhite};
    cursor: pointer;
    transition: text-decoration 0.3s ease;
    position: relative;
    font-size: 14px;
    
    &:hover {
        text-decoration: underline;
    }
`
