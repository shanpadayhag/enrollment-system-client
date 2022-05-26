import React, { useState, createContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const values = useState({
        'id': -1,
        'username': '',
        'first_name': '',
        'middle_name': '',
        'last_name': '',
    });

    return (
        <UserContext.Provider value={values}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContext;
