import {useState} from "react";
import {cookies} from "../util/cookie-handler";

function useLoggedIn() {
    const cookie = cookies.getCookie("logged_in");
    const [loggedIn, setLoggedIn] = useState(cookie ? JSON.parse(cookie) : false);

    const setIsLoggedIn = (isLoggedIn) => {
        if (isLoggedIn) {
            setLoggedIn(isLoggedIn);
            const date = new Date();
            date.setHours(date.getHours() + 10);
            cookies.setCookie("logged_in", isLoggedIn, {expires: date});
        } else {
            setLoggedIn(isLoggedIn);
            cookies.removeCookie("logged_in");
        }
    };

    return [loggedIn, setIsLoggedIn];
}

export default useLoggedIn;