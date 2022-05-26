import styled from 'styled-components';

import { LOGO_SCHOOL, BACKGROUND_LOGIN } from 'assets/images';
import { TERTIARY } from 'constants/components/form.constants';
import { Button } from 'components/forms';

export const LoginBody = styled.div`
  height: 100vh;
  background-image: url(${BACKGROUND_LOGIN});
`;

export const Container = styled.div`
  background: linear-gradient(to bottom, #1361AA 42%, white 42%);
  position: absolute;
  min-width: 200px;
  max-width: 230px;
  height: 450px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  padding: 0 30px;

  box-shadow: 0px 0px 30px 20px rgba(0, 0, 0, 0.25);
  border-radius: 25px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.img.attrs({
  src: LOGO_SCHOOL,
})`
  margin-top: 30px;
  margin-bottom: 10px;
  width: 80px;
  height: 80px;
`;

export const HeaderText = styled.h4`
  color: white;
  text-align: center;
  margin-bottom: 30px;
`;

export const SubHeaderText = styled.span`
  font-weight: 300;
`;
