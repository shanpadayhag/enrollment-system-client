import styled from 'styled-components';
import {Link} from "react-router-dom";

export const EnrolledStudentsListContainer = styled.div`
  background: rgba(255, 255, 255, 20%);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 25px;
  padding: 20px 30px;
`;

export const EnrolledStudentHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const EnrolledStudentHeaderTitle = styled.h2`
  color: #ffffff;
`;
