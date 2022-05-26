import React, { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import deleteStudentApi from 'services/enrollment/student/deleteStudent.api';
import RequestFailedException from 'exceptions/RequestFailedException';

const StudentDelete = () => {
  const { id } = useParams();

  const removeStudent = async (): void => {
    try {
      await deleteStudentApi(id);
    } catch (error) {
      if (!error instanceof RequestFailedException) {
        alert('Something went wrong');
      }
    }
  };

  useEffect(() => {
    removeStudent();
  }, []);

  return <Navigate to={'/user/students'}/>;
};

export default StudentDelete;
