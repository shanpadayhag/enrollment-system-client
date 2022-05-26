import React from 'react';
import {
  StudentDetailColumn,
  StudentDetailColumnContainer,
  StudentDetailContainer,
  StudentDetailLabel
} from 'pages/user/students/student-detail/StudentDetail.styles';

const StudentDetailComponent = (props) => (
  <StudentDetailContainer>
    <h2>Student Detail</h2>
    <StudentDetailColumnContainer>
      <StudentDetailColumn>
        <StudentDetailLabel>School ID</StudentDetailLabel>
        <span>{props.schoolId ?? 'None'}</span>

        <StudentDetailLabel>First Name</StudentDetailLabel>
        <span>{props.firstName ?? 'None'}</span>

        <StudentDetailLabel>Middle Name</StudentDetailLabel>
        <span>{props.middleName ?? 'None'}</span>

        <StudentDetailLabel>Last Name</StudentDetailLabel>
        <span>{props.lastName ?? 'None'}</span>

        <StudentDetailLabel>Sex</StudentDetailLabel>
        <span>{props.sex ?? 'None'}</span>

        <StudentDetailLabel>Guardian</StudentDetailLabel>
        <span>{props.guardian ?? 'None'}</span>

        <StudentDetailLabel>Guardian Number</StudentDetailLabel>
        <span>{props.guardianNumber ?? 'None'}</span>
      </StudentDetailColumn>

      <StudentDetailColumn>
        <StudentDetailLabel>Address Line 1</StudentDetailLabel>
        <span>{props.addressLine1 ?? 'None'}</span>

        <StudentDetailLabel>Address Line 2</StudentDetailLabel>
        <span>{props.addressLine2 ?? 'None'}</span>

        <StudentDetailLabel>City</StudentDetailLabel>
        <span>{props.city ?? 'None'}</span>

        <StudentDetailLabel>Province</StudentDetailLabel>
        <span>{props.province ?? 'None'}</span>
      </StudentDetailColumn>
    </StudentDetailColumnContainer>
  </StudentDetailContainer>
);

export default StudentDetailComponent;
