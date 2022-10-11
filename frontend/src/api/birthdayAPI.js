import axios from "axios";
import Cookie from "js-cookie";

const BASE_URL = "http://localhost:8000/api/";

const birthdayAPI = {};

const getCsrfConfig = () => {
  return {
    withCredentials: true,
    headers: {
      "X-CSRFToken": Cookie.get("csrftoken"),
    },
  };
};

const tryCatchFetch = async (axiosCall) => {
  try {
    const response = await axiosCall();
    console.log("DATA:", response.data);
    console.log("Response:", response);
    return response.data ? response.data : { message: "success" };
  } catch (e) {
    console.error("-- tryCatchFetch ERROR:", e.response ? e.response.data : e);
    return null;
  }
};

birthdayAPI.login = async (loginData) => {
  return await tryCatchFetch(() =>
    axios.post(`${BASE_URL}login/`, loginData, getCsrfConfig())
  );
};

birthdayAPI.logout = async () => {
  return await tryCatchFetch(() =>
    axios.post(`${BASE_URL}logout/`, getCsrfConfig())
  );
};

birthdayAPI.signup = async (signupData) => {
  return await tryCatchFetch(() =>
    axios.post(`${BASE_URL}users/`, signupData, getCsrfConfig())
  );
};

birthdayAPI.getAllBirthdays = async () => {
  return await tryCatchFetch(() =>
    axios.get(`${BASE_URL}birthdays/`, getCsrfConfig())
  );
};

birthdayAPI.getSingleBirthday = async (birthdayId) => {
  return await tryCatchFetch(() =>
    axios.get(`${BASE_URL}birthdays/${birthdayId}/`, getCsrfConfig())
  );
};

birthdayAPI.addNewBirthday = async (birthdayData) => {
  return await tryCatchFetch(() =>
    axios.post(`${BASE_URL}birthdays/`, birthdayData, getCsrfConfig())
  );
};

birthdayAPI.editBirthday = async (birthdayId, updatedData) => {
  return await tryCatchFetch(() =>
    axios.put(
      `${BASE_URL}birthdays/${birthdayId}/`,
      updatedData,
      getCsrfConfig()
    )
  );
};

birthdayAPI.deleteBirthday = async (birthdayId) => {
  return await tryCatchFetch(() =>
    axios.delete(`${BASE_URL}birthdays/${birthdayId}/`, getCsrfConfig())
  );
};

birthdayAPI.searchBirthday = async (searchTerm) => {
  return await tryCatchFetch(() =>
    axios.get(`${BASE_URL}birthdays/?search=${searchTerm}/`, getCsrfConfig())
  );
};

export default birthdayAPI;
