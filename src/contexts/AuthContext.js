import React, {createContext, useEffect, useState} from 'react';
import {withRouter} from 'react-router-dom';
import axios from "axios";

export const AuthContext = createContext();

function AuthContextProvider(props) {

    const [userData, setUserData] = useState(null);
    const authUrl ="/auth";

    useEffect(() => {
        fetchUserData();
    }, []);

    const fetchUserData = () => {
        axios.get("/user")
            .then(res => setUserData(res.data))
    };


    const logIn = (formData) => {
        axios.post(`${authUrl}/sign-in`, formData)
            .then(() => {
                fetchUserData();
                props.history.push('/');
            })
    };

    const logOut = () => {
        axios.post(`${authUrl}/logout`)
            .then(() => setUserData(null));
    };

    return (
        <AuthContext.Provider value={{userData, logIn, logOut}}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default withRouter(AuthContextProvider);