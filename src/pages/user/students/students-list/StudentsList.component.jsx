import React from 'react';
import {
  StudentsListContainer, StudentsListTableData,
  StudentsListTitle, StudentsListViewButton
} from 'pages/user/students/students-list/StudentsList.styles';
import { Table, TableData, TableHeader, TableRow } from 'components/tables';
import { TERTIARY } from 'constants/components/form.constants';

const StudentsListComponent = ({ students }) => (
  <StudentsListContainer>
    <StudentsListTitle>Students list</StudentsListTitle>

    <Table>
      <thead>
      <TableRow>
        <TableHeader>School ID</TableHeader>
        <TableHeader>Student Name</TableHeader>
        <TableHeader></TableHeader>
        <TableHeader></TableHeader>
        <TableHeader></TableHeader>
      </TableRow>
      </thead>

      <tbody>
      {students.length !== 0
        ? students.map((item, index) => (
          <TableRow key={index}>
            <TableData>{item.school_id}</TableData>

            <TableData>{`${item.last_name}, ${item.first_name} ${item.middle_name ?? ''}`}</TableData>

            <StudentsListTableData>
              <StudentsListViewButton to={`/user/student/${item.school_id}`}>View</StudentsListViewButton>
            </StudentsListTableData>

            <StudentsListTableData>
              <StudentsListViewButton to={`/user/student/update/${item.school_id}`}>Edit</StudentsListViewButton>
            </StudentsListTableData>

            <StudentsListTableData>
              <StudentsListViewButton
                to={`/user/student/delete/${item.id}`}
                theme={TERTIARY}>Delete</StudentsListViewButton>
            </StudentsListTableData>
          </TableRow>))

        : <TableRow>
          <TableData></TableData>
          <TableData>There is not record yet</TableData>
          <TableData></TableData>
          <TableData></TableData>
          <TableData></TableData>
        </TableRow>
      }
      </tbody>
    </Table>
  </StudentsListContainer>
);

export default StudentsListComponent;
