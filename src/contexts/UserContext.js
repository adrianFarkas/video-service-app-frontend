import React, {createContext, useCallback, useEffect, useState} from 'react';
import axios from "axios";
import {withRouter} from "react-router";

export const UserContext = createContext();

function UserContextProvider(props) {

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

    const logIn = (formData) => {
        return axios.post(`${authUrl}/sign-in`, formData)
            .then(res  => {
                const result = res.data;
                if (result["correct"] === false)
                    return Promise.reject("Incorrect email or password.");
                if (result["enabled"] === false)
                    return Promise.reject("Your account has not been verified yet.");
                fetchUserData();
                props.history.push("/");
            })
    };

    const logOut = () => {
        axios.post(`${authUrl}/logout`)
            .then(() => {
                setIsLoggedIn(false);
                setUserData(null);
                props.history.push("/");
            });
    };

    const signUp = (data) => {
        return axios.post("/auth/sign-up", data)
            .then(res => Promise.resolve(res.data))
    };

    const sendVerification = (token) => {
        return axios.get(`/auth/verify?token=${token}`)
            .then(res => Promise.resolve(res.data))
    };

    const changeProfileImg = (img) => {
        setUserData({...userData, profileImg: img})
    };

    return (
        <UserContext.Provider
            value={{userData, isLoggedIn, setIsLoggedIn, logIn, logOut, signUp, sendVerification, fetchUserData, changeProfileImg}}
        >
            {props.children}
        </UserContext.Provider>
    );
}

export default withRouter(UserContextProvider);