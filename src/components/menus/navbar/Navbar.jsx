import React from 'react';
import { NavbarBody, NavbarLink, NavbarIcon, NavbarText, LogoContainer, Logo } from "./Navbar.styles";

const Navbar = ({ items }) => {
    return (
        <NavbarBody>
            <LogoContainer>
                <Logo></Logo>
                <h4>PCC{"\n"}Enrollment System</h4>
            </LogoContainer>

            {items.map((item, index) => (
                <NavbarLink key={index} to={item.link}>

                    <NavbarIcon>{item.icon}</NavbarIcon>

                    <NavbarText>{item.name}</NavbarText>

                </NavbarLink>
            ))}
        </NavbarBody>
    )
}

export default Navbar;
