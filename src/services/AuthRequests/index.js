import { setHeaders } from "../Headers";
import { addDataToLocalStorage, removeDataFromLocalStorage } from "../LocalStorage";
const axios = require('axios');
export const signInRequest = async (props) => {
    const data = JSON.stringify({
        "name": props.Name,
        "email": props.email,
        "password": props.password
    });
    const config = {
        method: 'POST',
        url: `${process.env.REACT_APP_API_URL}/register`,
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };
    const res = await axios(config)
        .then(function (response) {
        console.dir(response.data);
        addDataToLocalStorage({ key: "@authToken", value: response.data.token });
        return true;
    })
        .catch(function (error) {
        console.log(error);
        return false;
    });
    return res;
};
export const logInRequest = async ({ email, password }) => {
    const data = JSON.stringify({
        "email": email,
        "password": password
    });
    const temp_config = {
        method: 'POST',
        url: `${process.env.REACT_APP_URL}/login`,
        data: data
    };
    console.log(process.env)
    const final_config = setHeaders(temp_config);
    console.dir(final_config, "final config");
    return axios(final_config)
        .then(function (response) {
        console.log(response);
        addDataToLocalStorage({ key: "@authToken", value: response.data.token });
        return true;
    })
        .catch(function (error) {
        console.log(error);
    });
};
export const logoutRequest = async () => {
    removeDataFromLocalStorage({ key: "@authToken" });
};
