import React from 'react';
import { BrowserRouter, Routes as RoutesContainer, Route } from 'react-router-dom';

import { Login, Logout, Signup } from 'pages/guest';
import { ProtectedRoute } from 'components/routes';
import UserRoutes from './UserRoutes';

const Routes = () => (
  <BrowserRouter>
    <RoutesContainer>
      <Route path="/" element={<Login/>}/>
      <Route path="/logout" element={<Logout/>}/>
      <Route path="/signup" element={<Signup/>}/>

      <Route path="/" element={<ProtectedRoute/>}>
        <Route path="/user/*" element={<UserRoutes/>}/>
      </Route>
    </RoutesContainer>
  </BrowserRouter>
);

export default Routes;