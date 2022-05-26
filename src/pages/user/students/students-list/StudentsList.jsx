import React, { useEffect, useState } from 'react';
import StudentsListComponent from 'pages/user/students/students-list/StudentsList.component';
import { getStudentsApi } from 'services/enrollment';

const StudentsList = () => {
  /**
   * Initialize states.
   */
  const [students, setStudents] = useState([]);

  /**
   * Fetch all students from the enrollment service.
   */
  const getAllStudents = async (): void => {
    const result = await getStudentsApi();

    setStudents(result);
  };

  useEffect(() => {
    getAllStudents();
  }, []);

  return <StudentsListComponent students={students}/>;
};

export default StudentsList;
