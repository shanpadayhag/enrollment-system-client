import styled from 'styled-components'
import { LOGO_SCHOOL } from 'assets/images'
import { Link } from 'react-router-dom'

export const NavbarBody = styled.div`
    width: 350px;
    background-color: white;
    position: sticky;
    height: 100vh;
    box-shadow: 0 0 30px 5px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    top: 0;
    left: 0;


    h4 {
        color: white;
        align-self: center;
        white-space: pre;
    }

    @media (max-width: 768px) {
        width: 100%;
        height: 60px;
        bottom: 0;
        flex-direction: row;
        justify-content: space-around;
    }
`;

export const LogoContainer = styled.div`
    width: 100%;
    height: 85px;
    background-color: #1361AA;
    margin-bottom: 50px;
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: center;

    @media (max-width: 768px) {
        display: none;
        visibility: hidden;
    }
`;

export const Logo = styled.img.attrs({
  src: LOGO_SCHOOL,
})`
  width: 45px;
  height: 45px;
  align-self: center;
  margin-right: 15px;
  margin-left: -10px;
`;

export const NavbarLink = styled(Link)`
    margin: 15px 0 15px 5px;
    text-decoration: none;
    color: #454545;
    font-size: 15px;
`;

export const NavbarIcon = styled.span`
    margin-left: 30px;
    margin-right: 15px;
    vertical-align: middle;
    font-size: 24px;

    @media (max-width: 768px) {
        margin: 0;
    }
`;

export const NavbarText = styled.span`
    @media (max-width: 768px) {
        display: none;
        visibility: hidden;
    }
`;