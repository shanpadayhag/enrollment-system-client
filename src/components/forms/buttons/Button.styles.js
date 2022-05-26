import styled from "styled-components";

export const PrimaryButton = styled.button`
  width: 100%;
  background: linear-gradient(270deg, #005E7F 0%, #2A63B9 100%);
  color: white;
  padding: 12px 20px;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    transform: scale(1.03);
  }
`;

export const TertiaryButton = styled.button`
  color: #1361AA;
  font-size: 75%;
  background: none;
  border: none;
  cursor: pointer;
  margin-top: 10px;
  width: 100%;
`;