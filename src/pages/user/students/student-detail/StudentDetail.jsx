import React, { useEffect, useState } from 'react';
import StudentDetailComponent from 'pages/user/students/student-detail/StudentDetail.component';
import getStudentDetailApi from 'services/enrollment/student/getStudentDetail.api';
import { useParams } from 'react-router-dom';

const StudentDetail = () => {
  /**
   * Get the id from url parameter
   */
  const { id } = useParams();

  /**
   * Initialize state
   */
  const [schoolId, setSchoolId] = useState('');
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [sex, setSex] = useState('');
  const [guardian, setGuardian] = useState('');
  const [guardianNumber, setGuardianNumber] = useState('');

  /**
   * Fetch student details
   * @returns {Promise<void>}
   */
  const fetchStudentDetails = async (): void => {
    const result = await getStudentDetailApi(id);

    setSchoolId(result.school_id);
    setFirstName(result.first_name);
    setMiddleName(result.middle_name);
    setLastName(result.last_name);
    setAddressLine1(result.address_line_1);
    setAddressLine2(result.address_line_2);
    setCity(result.city);
    setProvince(result.province);
    setSex(result.sex);
    setGuardian(result.guardian);
    setGuardianNumber(result.guardian_number);
  };

  /**
   * Fetch student details on mount
   */
  useEffect(() => {
    fetchStudentDetails();
  }, []);

  return <StudentDetailComponent
    schoolId={schoolId}
    firstName={firstName}
    middleName={middleName}
    lastName={lastName}
    addressLine1={addressLine1}
    addressLine2={addressLine2}
    city={city}
    province={province}
    sex={sex}
    guardian={guardian}
    guardianNumber={guardianNumber}/>;
};

export default StudentDetail;
