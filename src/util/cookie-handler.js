import Cookies from "universal-cookie";

const cookie = new Cookies();

export const cookies = {
    getCookie: (key) => cookie.get(key),
    removeCookie: (key) => cookie.remove(key),
    setCookie: (key, value, options) => cookie.set(key, value, options),
};