import { setHeaders, setOnlyAuth } from "../Headers";
import {
  addDataToLocalStorage,
  removeDataFromLocalStorage,
  getDataFromLocalStorage,
} from "../LocalStorage";
const axios = require("axios");

export const registerUserService = async (props) => {
  const data = JSON.stringify({
    name: props.user.name,
    email: props.user.email,
    password: props.user.password,
  });
  const config = {
    method: "POST",
    url: `${process.env.REACT_APP_URL}/register`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };
  const res = axios(config)
    .then(function (response) {
      console.dir(response.data);
      addDataToLocalStorage({ key: "@authToken", value: response.data.token });
      return response;
    })
    .catch(function (error) {
      console.log(error);
      return false;
    });
  return res;
};
export const loginUserService = async (props) => {
  const data = JSON.stringify({
    email: props.user.email,
    password: props.user.password,
  });
  console.log("this is",data)
  const temp_config = {
    method: "POST",
    url: `${process.env.REACT_APP_URL}/login`,
    data: data,
  };
  const final_config = setHeaders(temp_config);
  //console.dir(final_config, "final config");
  return await axios(final_config)
    .then(function (response) {
      addDataToLocalStorage({ key: "@authToken", value: response.data.token });
      return true;
    })
    .catch(function (error) {
      return false;
    });
};
export const getmeService = async () => {
  const data = "";
  const temp_config = {
    method: "GET",
    url: `${process.env.REACT_APP_URL}/me`,
    data: data,
  };
  const config = setOnlyAuth(temp_config);
  const resp = await axios(config);
  return resp.data;
};
export const logoutService = async () => {
  console.log("deleting auth");
  try{
    removeDataFromLocalStorage();
    return true;
  }
  catch(err){
    console.log(err);
    return false;
  }
};
