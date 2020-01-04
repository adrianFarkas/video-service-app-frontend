import React, {createContext, useEffect, useState} from 'react';
import Cookies from "universal-cookie";
import axios from "axios";

export const AuthContext = createContext();

function AuthContextProvider(props) {

    const cookie = new Cookies();
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const userToken = getUser();
        if (userToken) fetchUserData(userToken);
    }, []);

    const fetchUserData = (token) => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        axios.get("/user")
            .then(res => setUserData(res.data))
    };

    const getUser = () => {
        return cookie.get("token");
    };

    const logIn = (token) => {
        cookie.set("token", token);
        fetchUserData(token);
    };

    const logOut = () => {
        cookie.remove("token");
        setUserData(null);
    };

    return (
        <AuthContext.Provider value={{userData, logIn, logOut}}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;