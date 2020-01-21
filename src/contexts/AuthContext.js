import React, {createContext, useCallback, useState} from 'react';
import axios from "axios";

export const AuthContext = createContext();

function AuthContextProvider(props) {

    const [userData, setUserData] = useState(null);
    const authUrl ="/auth";

    const fetchUserData = useCallback(() => {
        axios.get("/user")
            .then(res => setUserData(res.data))
    }, []);

    const logIn = (formData) => new Promise(resolve => {
        axios.post(`${authUrl}/sign-in`, formData)
            .then(res => resolve(res.data))
    });

    const logOut = () => {
        axios.post(`${authUrl}/logout`)
            .then(() => setUserData(null));
    };

    return (
        <AuthContext.Provider value={{userData, logIn, logOut, fetchUserData}}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;