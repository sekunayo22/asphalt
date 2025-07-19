import { routes } from "../../utils/constants"
import { Logo, StyledHeader, Nav, NavList, NavItem } from "./styles"
import logo from "../../assets/images/logo.png";
import Button from "../Button";

const Header = () => {
  return (
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
  )
}

export default Header