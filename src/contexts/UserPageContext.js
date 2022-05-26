import React, { useState, createContext } from "react";

const UserPageContext = createContext();

export const UserPageProvider = ({children}) => {
    const values = useState({
        dashboard: true,
    })

    return (
        <UserPageContext.Provider value={values}>
            {children}
        </UserPageContext.Provider>
    )
};

export default UserPageContext