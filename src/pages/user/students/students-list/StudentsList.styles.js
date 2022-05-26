import styled from 'styled-components';
import { Link } from 'components/forms';
import { TableData } from 'components/tables';

export const StudentsListContainer = styled.div`
  background: rgba(255, 255, 255, 20%);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 25px;
  padding: 20px 30px;

  min-width: 700px;

  @media (max-width: 768px) {
    min-width: 490px;
  }
`;

export const StudentsListTitle = styled.h2`
  color: #ffffff;
`;

export const StudentsListViewButton = styled(Link)`
  width: auto;
`;

export const StudentsListTableData = styled(TableData)`
  width: 10%;
`;