import React, {createContext, useCallback, useEffect, useState} from 'react';
import axios from "axios";

export const AuthContext = createContext();

function AuthContextProvider(props) {

    const [userData, setUserData] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const authUrl ="/auth";

    const fetchUserData = useCallback(() => {
        axios.get("/user")
            .then(res => {
                setUserData(res.data);
                setIsLoggedIn(true);
            })
            .catch(e => console.log(e.message))
    }, []);

    useEffect(() => {
        fetchUserData();
    }, [fetchUserData]);

    const logIn = (formData) => new Promise(resolve => {
        axios.post(`${authUrl}/sign-in`, formData)
            .then(res => resolve(res.data))
    });

    const logOut = () => {
        axios.post(`${authUrl}/logout`)
            .then(() => {
                setIsLoggedIn(false);
                setUserData(null);
            });
    };

    return (
        <AuthContext.Provider value={{userData, isLoggedIn, setIsLoggedIn, logIn, logOut, fetchUserData}}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;