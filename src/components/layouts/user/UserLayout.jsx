import React from 'react';
import { Navbar } from "components/menus";
import {UserLayoutBody, UserPagesBody, UserPagesContainer} from "./UserLayout.styles";
import { DASHBOARD, ENROLLED_STUDENT, STUDENTS, LOGOUT } from "constants/components/layout.constants";
import { USER_DASHBOARD, USER_ENROLLED_STUDENT, USER_STUDENTS_LIST, USER_LOGOUT } from "constants/routes/route.constants";
import { UserPageProvider } from "contexts/UserPageContext";
import { BsHouseDoor, BsPerson, BsPersonBadge, BsFillDoorOpenFill } from 'react-icons/bs';

const UserLayout = ({ children }) => (
    <UserPageProvider>
        <UserLayoutBody>
            <Navbar items={[
                { name: DASHBOARD, link: USER_DASHBOARD, icon: <BsHouseDoor /> },
                { name: STUDENTS, link: USER_STUDENTS_LIST, icon: <BsPerson /> },
                { name: ENROLLED_STUDENT, link: USER_ENROLLED_STUDENT, icon: <BsPersonBadge /> },
                { name: LOGOUT, link: USER_LOGOUT, icon: <BsFillDoorOpenFill /> }
            ]} />

            <UserPagesContainer>
              <UserPagesBody>
                {children}
              </UserPagesBody>
            </UserPagesContainer>
        </UserLayoutBody>
    </UserPageProvider>
)

export default UserLayout;
