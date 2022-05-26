import React from 'react';
import {
  Routes as RoutesContainer,
  Route,
  Navigate
} from 'react-router-dom';
import {
  Dashboard,
  EnrolledStudent,
  EnrollStudent,
  StudentDelete,
  StudentDetail,
  StudentsList,
  StudentUpdate
} from 'pages/user';
import { UserLayout } from 'components/layouts';

const UserRoutes = () => (
  <UserLayout>
    <RoutesContainer>
      <Route path="/" element={<Dashboard/>}/>

      <Route path="/students" element={<StudentsList/>}/>
      <Route path="/student/:id" element={<StudentDetail/>}/>
      <Route path="/student/update/:id" element={<StudentUpdate/>}/>
      <Route path="/student/delete/:id" element={<StudentDelete/>}/>

      <Route path="/enrolled-student" element={<EnrolledStudent/>}/>
      <Route path="/enroll-student" element={<EnrollStudent/>}/>
      <Route path="/*" element={<Navigate to="/user"/>}/>
    </RoutesContainer>
  </UserLayout>
);

export default UserRoutes;
