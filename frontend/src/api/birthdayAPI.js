import axios from "axios";

const BASE_URL = "http://localhost:8000/api/";

const birthdayAPI = {};

const tryCatchFetch = async (axiosCall) => {
  try {
    const response = await axiosCall();
    return response.data ? response.data : { message: "success" };
  } catch (e) {
    console.error("-- tryCatchFetch ERROR:", e.response ? e.response.data : e);
    return null;
  }
};

birthdayAPI.getAllBirthdays = async () => {
  return await tryCatchFetch(() => axios.get(`${BASE_URL}birthdays/`));
};

birthdayAPI.getSingleBirthday = async (birthdayID) => {
  return await tryCatchFetch(() =>
    axios.get(`${BASE_URL}birthdays/${birthdayID}/`)
  );
};

birthdayAPI.addNewBirthday = async (birthdayData) => {
  return await tryCatchFetch(() =>
    axios.post(`${BASE_URL}birthdays/`, birthdayData)
  );
};

export default birthdayAPI;
