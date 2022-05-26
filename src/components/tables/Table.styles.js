import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  contain: paint;
  border-radius: 15px;
  margin-top: 20px;
  backdrop-filter: blur(5px);
`;

export const TableRow = styled.tr`
  &:hover {
    background-color: #FFFFFF50 !important;
  }

  &:nth-child(even){
    background-color: #FFFFFF20;
  }
`;

export const TableHeader = styled.th`
  text-align: left;
  color: white;
  background-color: rgba(19, 97, 170, 10);
  padding: 15px 20px;

  position: sticky;
  top: 0;
  z-index: 10;
`;

export const TableData = styled.td`
    padding: 20px;
`;