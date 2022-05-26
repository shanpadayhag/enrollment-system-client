import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PrimaryLink = styled(Link)`
  text-align: center;
  color: #ffffff;
  text-decoration: none;
  background: #1361AA;
  border-radius: 10px;
  padding: 10px 15px;

  &:hover {
    background: #094E8C;
  }
`;

export const TertiaryLink = styled(Link)`
  color: #1361AA;
  text-decoration: none;
  background: none;
  border: none;
  cursor: pointer;
  margin-top: 10px;
  width: 100%;
  text-align: center;
`;