import React, {useState, useContext, useEffect} from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import RequestFailedException from "exceptions/RequestFailedException";
import verifyTokenApi from "services/account/verifyToken.api";
import { UserContext } from "contexts";

const ProtectedRoute = () => {
    const [authorized, setAuthorized] = useState(false);
    const [isReady, setIsReady] = useState(false);
    const [user, setUser] = useContext(UserContext);

    const fetchUser = async (): void => {
        try {
            const result = await verifyTokenApi();

            setUser(result);
            setAuthorized(true);
        } catch (error) {
            if (error instanceof RequestFailedException) localStorage.clear();
            else alert('Something went wrong');
        }

        setIsReady(true);
    }

    useEffect(() => {
        fetchUser()
    }, [])

    if (!isReady) return null;
    return authorized
        ? <Outlet />
        : <Navigate to="/" />;
}

export default ProtectedRoute;
