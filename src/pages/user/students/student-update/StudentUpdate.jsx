import React, { useEffect, useState } from 'react';
import StudentUpdateComponent from 'pages/user/students/student-update/StudentUpdate.component';
import { useNavigate, useParams } from 'react-router-dom';
import getStudentDetailApi from 'services/enrollment/student/getStudentDetail.api';
import updateStudentApi from 'services/enrollment/student/updateStudent.api';
import RequestFailedException from 'exceptions/RequestFailedException';

const StudentUpdate = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  /**
   * Initialize state
   */
  const [studentId, setStudentId] = useState('');
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [sex, setSex] = useState('');
  const [nationality, setNationality] = useState('');
  const [guardian, setGuardian] = useState('');
  const [guardianNumber, setGuardianNumber] = useState('');

  /**
   * Fetch student details
   * @returns {Promise<void>}
   */
  const fetchStudentDetails = async (): void => {
    const result = await getStudentDetailApi(id);

    setStudentId(result.id);
    setFirstName(result.first_name);
    setMiddleName(result.middle_name ?? '');
    setLastName(result.last_name);
    setAddressLine1(result.address_line_1);
    setAddressLine2(result.address_line_2);
    setCity(result.city);
    setProvince(result.province);
    setSex(result.sex);
    setNationality(result.nationality);
    setGuardian(result.guardian);
    setGuardianNumber(result.guardian_number);
  };

  const updateStudent = async () => {
    try {
      const args = {
        school_id: id,
        first_name: firstName,
        middle_name: middleName,
        last_name: lastName,
        address_line_1: addressLine1,
        address_line_2: addressLine2,
        city: city,
        province: province,
        sex: sex,
        nationality: nationality,
        guardian: guardian,
        guardian_number: guardianNumber,
      };

      await updateStudentApi(args, studentId);

      navigate('/user/students');
    } catch (error) {
      if (error instanceof RequestFailedException) {
        alert(error.message);
      } else {
        alert('Something went wrong');
      }
    }
  };


  /**
   * Fetch student details on mount
   */
  useEffect(() => {
    fetchStudentDetails();
  }, []);

  return <StudentUpdateComponent
    updateStudent={updateStudent}
    setFirstName={setFirstName}
    setMiddleName={setMiddleName}
    setLastName={setLastName}
    setAddressLine1={setAddressLine1}
    setAddressLine2={setAddressLine2}
    setCity={setCity}
    setProvince={setProvince}
    setSex={setSex}
    setNationality={setNationality}
    setGuardian={setGuardian}
    setGuardianNumber={setGuardianNumber}
    schoolId={id}
    firstName={firstName}
    middleName={middleName}
    lastName={lastName}
    addressLine1={addressLine1}
    addressLine2={addressLine2}
    city={city}
    province={province}
    sex={sex}
    nationality={nationality}
    guardian={guardian}
    guardianNumber={guardianNumber}/>;
};

export default StudentUpdate;
