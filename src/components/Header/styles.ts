import styled from "@emotion/styled";
import { colBlack, colWhite } from "../../styles/abstracts/variables";

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;

    @media (max-width: 480px) {
        display: none;
    }
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

export const StyledMobileHeader = styled.header`
    display: none;

    @media (max-width: 480px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 32px;
    }
`

export const HamburgerMenu = styled.button`
    width: 24px;
    height: 24px;

    & svg {
        width: 100%;
        height: 100%;
        fill: ${colWhite};
    }
`

export const NavModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${colWhite};
    z-index: 1000;
    padding: 32px;
    overflow: hidden;
`

export const Links = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 32px;
`

export const Link = styled.a`
    font-size: 24px;
    color: ${colBlack};
    text-decoration: none;
    font-weight: 400;
    cursor: pointer;
    transition: text-decoration 0.3s ease;
    
    &:hover {
        text-decoration: underline;
    }
`

export const NavModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const CloseButton = styled.button`
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;

    & svg {
        width: 100%;
        height: 100%;
        fill: ${colBlack};
    }
`