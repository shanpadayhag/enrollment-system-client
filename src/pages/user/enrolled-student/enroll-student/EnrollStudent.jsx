import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import EnrollStudentComponent from "./EnrollStudent.component";
import {enrollStudentApi, getFormEnrollStudentApi} from "services/enrollment";
import RequestFailedException from "exceptions/RequestFailedException";

const EnrollStudent = () => {
  const navigate = useNavigate();

  /**
   * Initializing states.
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
  const [nationality, setNationality] = useState('Filipino');
  const [guardian, setGuardian] = useState('');
  const [guardianNumber, setGuardianNumber] = useState('');
  const [academicYearName, setAcademicYearName] = useState('');
  const [academicTermName, setAcademicTermName] = useState('');
  const [academicYear, setAcademicYear] = useState(0);
  const [academicTerm, setAcademicTerm] = useState(0);
  const [program, setProgram] = useState(0);
  const [programsList, setProgramsList] = useState([]);

  /**
   * Enroll a student.
   *
   * @returns {Promise<void>}
   */
  const enrollStudent = async () => {
    try {
      const args = {
        school_id: schoolId,
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
        academic_year_id: academicYear,
        academic_term_id: academicTerm,
        program_id: program,
      }

      await enrollStudentApi(args);

      navigate('/user/enrolled-student');
    } catch (error) {
      if (error instanceof RequestFailedException) alert(error.message)
      else alert('Something went wrong')
    }
  }

  /**
   * Set student details.
   *
   * @returns {Promise<void>}
   */
  const setStudentDetails = async (): void => {
    const args = {
      school_id: schoolId
    }

    const result = await getFormEnrollStudentApi(args);

    const {student, academic_year, academic_term, programs} = result;

    setFirstName(student?.first_name || '')
    setMiddleName(student?.middle_name || '')
    setLastName(student?.last_name || '')
    setAddressLine1(student?.address_line_1 || '')
    setAddressLine2(student?.address_line_2 || '')
    setCity(student?.city || '')
    setProvince(student?.province || '')
    setSex(student?.sex || '')
    setNationality(student?.nationality || '')
    setGuardian(student?.guardian || '')
    setGuardianNumber(student?.guardian_number || '')
    setAcademicYear(academic_year.id || '')
    setAcademicTerm(academic_term.id || '')
    setAcademicYearName(academic_year.scope || '')
    setAcademicTermName(academic_term.term || '')
    setProgramsList(programs)
  }

  useEffect(() => {
    setStudentDetails()
  }, [])

  return <EnrollStudentComponent
    setStudentDetails={setStudentDetails}
    enrollStudent={enrollStudent}
    programsList={programsList}
    academicYearName={academicYearName}
    setAcademicYearName={setAcademicYearName}
    academicTermName={academicTermName}
    setAcademicTermName={setAcademicTermName}
      schoolId={schoolId}
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
      guardianNumber={guardianNumber}
      academicYear={academicYear}
      academicTerm={academicTerm}
      program={program}
      setSchoolId={setSchoolId}
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
      setAcademicYear={setAcademicYear}
      setAcademicTerm={setAcademicTerm}
      setProgram={setProgram} />
};

export default EnrollStudent;
