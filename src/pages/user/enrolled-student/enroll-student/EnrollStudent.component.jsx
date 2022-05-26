import React from 'react';
import {Button, InputField} from "components/forms";
import Selector from "components/forms/selectors/Selector";
import {
  EnrollStudentForm,
  EnrollStudentFormColumn,
  EnrollStudentFormContainer,
  EnrollStudentFormTitle
} from "./EnrollStudent.styles";

const EnrollStudentComponent = (props) => (
  <EnrollStudentFormContainer>
    <EnrollStudentFormTitle>Enroll a student</EnrollStudentFormTitle>

    <EnrollStudentForm onSubmit={props.enrollStudent}>
      <EnrollStudentFormColumn>
        <InputField
          placeholder="School ID"
          value={props.schoolId}
          onChangeText={props.setSchoolId}
          onFocusOut={props.setStudentDetails}/>

        <InputField
          placeholder="Student First Name"
          value={props.firstName}
          onChangeText={props.setFirstName} />

        <InputField
          placeholder="Student Middle Name"
          value={props.middleName}
          onChangeText={props.setMiddleName} />

        <InputField
          placeholder="Student Last Name"
          value={props.lastName}
          onChangeText={props.setLastName} />

        <InputField
          placeholder="Address Line 1"
          value={props.addressLine1}
          onChangeText={props.setAddressLine1} />

        <InputField
          placeholder="Address Line 2"
          value={props.addressLine2}
          onChangeText={props.setAddressLine2} />

        <InputField
          placeholder="City"
          value={props.city}
          onChangeText={props.setCity} />

        <InputField
          placeholder="Province"
          value={props.province}
          onChangeText={props.setProvince} />

        <Selector
          options={[{id: 'male', name: 'Male'}, {id: 'female', name: 'Female'}]}
          onChangeValue={props.setSex}
          value={props.sex}
          name={'name'}
          title={'sex'}/>

        <InputField
          placeholder="Nationality"
          value={props.nationality}
          onChangeText={props.setNationality} />

        <InputField
          placeholder="Guardian"
          value={props.guardian}
          onChangeText={props.setGuardian} />

        <InputField
          placeholder="Guardian Number"
          value={props.guardianNumber}
          onChangeText={props.setGuardianNumber} />
      </EnrollStudentFormColumn>

      <EnrollStudentFormColumn>
        <Selector
          options={props.programsList}
          value={props.program}
          onChangeValue={props.setProgram}
          name={'name'}
          title={'program'}/>

        <InputField
          placeholder="Academic Year"
          value={props.academicYearName}
          disabled />

        <InputField
          placeholder="Academic Term"
          value={props.academicTermName}
          disabled />

        <Button>SUBMIT</Button>
      </EnrollStudentFormColumn>
    </EnrollStudentForm>
  </EnrollStudentFormContainer>
);

export default EnrollStudentComponent;
