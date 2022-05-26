import React, {useEffect, useState} from 'react';
import EnrolledStudentComponent from "./EnrolledStudent.component";
import {getEnrolledStudentsApi} from "services/enrollment";

const EnrolledStudent = () => {
  const [enrolledStudents, setEnrolledStudents] = useState([]);

  const fetchEnrolledStudents = async (): void => {
    const result = await getEnrolledStudentsApi()

    setEnrolledStudents(result)
  }

  useEffect(() => {
    fetchEnrolledStudents()
  }, [])

  return <EnrolledStudentComponent enrolledStudents={enrolledStudents}/>
}

export default EnrolledStudent;
