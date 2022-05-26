import React from 'react';
import {
  StudentUpdateColumn,
  StudentUpdateColumnContainer,
  StudentUpdateContainer,
  StudentUpdateForm,
  StudentUpdateLabel
} from 'pages/user/students/student-update/StudentUpdate.styles';
import { Button, InputField } from 'components/forms';
import Selector from 'components/forms/selectors/Selector';

const StudentUpdateComponent = (props) => (
  <StudentUpdateContainer>
    <h2>Student Update</h2>

    <StudentUpdateForm onSubmit={props.updateStudent}>
      <StudentUpdateColumnContainer>
        <StudentUpdateColumn>
          <StudentUpdateLabel>School ID</StudentUpdateLabel>
          <InputField
            disabled
            placeholder="School ID"
            value={props.schoolId ?? ''}
            onChangeText={props.setSchoolId}/>

          <StudentUpdateLabel>First Name</StudentUpdateLabel>
          <InputField
            placeholder="First Name"
            value={props.firstName ?? ''}
            onChangeText={props.setFirstName}/>

          <StudentUpdateLabel>Middle Name</StudentUpdateLabel>
          <InputField
            placeholder="Middle Name"
            value={props.middleName ?? ''}
            onChangeText={props.setMiddleName}/>

          <StudentUpdateLabel>Last Name</StudentUpdateLabel>
          <InputField
            placeholder="Last Name"
            value={props.lastName ?? ''}
            onChangeText={props.setLastName}/>

          <StudentUpdateLabel>Sex</StudentUpdateLabel>
          <Selector
            options={[{ id: 'male', name: 'Male' }, { id: 'female', name: 'Female' }]}
            onChangeValue={props.setSex}
            value={props.sex}
            name={'name'}
            title={'sex'}/>

          <StudentUpdateLabel>Nationality</StudentUpdateLabel>
          <InputField
            placeholder="Nationality"
            value={props.nationality ?? ''}
            onChangeText={props.setNationality}/>

          <StudentUpdateLabel>Guardian</StudentUpdateLabel>
          <InputField
            placeholder="Guardian"
            value={props.guardian ?? ''}
            onChangeText={props.setGuardian}/>

          <StudentUpdateLabel>Guardian Number</StudentUpdateLabel>
          <InputField
            placeholder="Guardian Number"
            value={props.guardianNumber ?? ''}
            onChangeText={props.setGuardianNumber}/>
        </StudentUpdateColumn>

        <StudentUpdateColumn>
          <StudentUpdateLabel>Address Line 1</StudentUpdateLabel>
          <InputField
            placeholder="Address Line 1"
            value={props.addressLine1 ?? ''}
            onChangeText={props.setAddressLine1}/>

          <StudentUpdateLabel>Address Line 2</StudentUpdateLabel>
          <InputField
            placeholder="Address Line 2"
            value={props.addressLine2 ?? ''}
            onChangeText={props.setAddressLine2}/>

          <StudentUpdateLabel>City</StudentUpdateLabel>
          <InputField
            placeholder="City"
            value={props.city ?? ''}
            onChangeText={props.setCity}/>

          <StudentUpdateLabel>Province</StudentUpdateLabel>
          <InputField
            placeholder="Province"
            value={props.province ?? ''}
            onChangeText={props.setProvince}/>

          <Button>Update Student</Button>
        </StudentUpdateColumn>
      </StudentUpdateColumnContainer>
    </StudentUpdateForm>
  </StudentUpdateContainer>
);

export default StudentUpdateComponent;
