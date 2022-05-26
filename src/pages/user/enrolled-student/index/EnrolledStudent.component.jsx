import React from 'react';
import { Link } from 'components/forms'
import {
  EnrolledStudentHeaderContainer,
  EnrolledStudentsListContainer,
  EnrolledStudentHeaderTitle
} from "./EnrolledStudent.styles";
import {Table, TableData, TableHeader, TableRow} from "components/tables";

const EnrolledStudentComponent = ({enrolledStudents}) => (
    <EnrolledStudentsListContainer>
      <EnrolledStudentHeaderContainer>
        <EnrolledStudentHeaderTitle>Enrolled Student</EnrolledStudentHeaderTitle>
        <Link to="/user/enroll-student">Enroll new student</Link>
      </EnrolledStudentHeaderContainer>

      <Table>
        <thead>
          <TableRow>
            <TableHeader>School ID</TableHeader>
            <TableHeader>Student Name</TableHeader>
            <TableHeader>Student Program</TableHeader>
          </TableRow>
        </thead>

        <tbody>
        {enrolledStudents.length !== 0
          ? enrolledStudents.map((item, index) => (
            <TableRow>
              <TableData>{item.student.school_id}</TableData>
              <TableData>
                {`${item.student.last_name}, ${item.student.first_name} ${item.student.middle_name ?? ''}`}</TableData>
              <TableData>{item.program.name}</TableData>
            </TableRow>
          ))
          : <TableRow>
            <TableData></TableData>
            <TableData>There are no enrolled students yet</TableData>
            <TableData></TableData>
          </TableRow>}
        </tbody>
      </Table>
    </EnrolledStudentsListContainer>
);

export default EnrolledStudentComponent;
