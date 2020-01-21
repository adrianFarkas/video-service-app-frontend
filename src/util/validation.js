import axios from "axios";

const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const lowerCase = /[a-z]/;
const upperCase = /[A-Z]/;
const number = /[0-9]/;

export const errorMessage = {
    emailExist: "This email is already exists.",
    emailInvalid: "Invalid email format.",
    passwordInvalid: "Your password must contain minimum of 8 characters, at least 1 upper case, 1 lower case letter and 1 number.",
    passwordNotMatch: "Passwords do not match."
};

export const isEmailValid = (email) => {
    return emailPattern.test(email);
};

export const checkEmailExists = (email) => new Promise(resolve => {
    axios.get(`/auth/exists?email=${email}`)
        .then(res => resolve(res))
});

export const isPasswordValid = (password) => {
    return lowerCase.test(password) && upperCase.test(password)
        && number.test(password) && password.length >= 8;
};

export const isPasswordMatch = (password, confirmationPassword) => {
    return password === confirmationPassword;
};