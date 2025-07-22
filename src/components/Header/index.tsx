import { routes } from "../../utils/constants"
import { Logo, StyledHeader, Nav, NavList, NavItem, HamburgerMenu, NavModal, Links, Link, NavModalHeader, CloseButton } from "./styles"
import logo from "../../assets/images/logo.png";
import Button from "../Button";
import { StyledMobileHeader } from "./styles";
import Hamburger from "../../assets/icons/hamburger.svg";
import Close from "../../assets/icons/close.svg";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <StyledHeader>
        <Logo>
            <img src={logo} alt="logoz" />
        </Logo>

        <Nav>
            <NavList>
                {
                    routes?.map((route, index) => {
                        return <NavItem key={index}>{route?.text}</NavItem>
                    })
                }
            </NavList>
        </Nav>
        <Button variant="primary" type="button" label="Get Started" />
    </StyledHeader>
    <StyledMobileHeader>
        <Logo>
            <img src={logo} alt="logoz" />
        </Logo>

        <HamburgerMenu onClick={() => setIsOpen(!isOpen)}>
            <Hamburger />
        </HamburgerMenu>
        {isOpen && <NavModal>
        <NavModalHeader>
            <Logo>
                <img src={logo} alt="logoz" />
            </Logo>
            <CloseButton type="button" onClick={() => setIsOpen(false)}>
                <Close />
            </CloseButton>
        </NavModalHeader>
        <Links>
            {
                routes?.map((route, index) => {
                    return <Link key={index}>{route?.text}</Link>
                })
            }
        </Links>
        </NavModal>}
    </StyledMobileHeader>
    </>
  )
}

export default Header