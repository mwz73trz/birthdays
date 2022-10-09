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

birthdayAPI.getSingleBirthday = async (birthdayId) => {
  return await tryCatchFetch(() =>
    axios.get(`${BASE_URL}birthdays/${birthdayId}/`)
  );
};

birthdayAPI.addNewBirthday = async (birthdayData) => {
  return await tryCatchFetch(() =>
    axios.post(`${BASE_URL}birthdays/`, birthdayData)
  );
};

birthdayAPI.editBirthday = async (birthdayId, updatedData) => {
  return await tryCatchFetch(() =>
    axios.put(`${BASE_URL}birthdays/${birthdayId}/`, updatedData)
  );
};

birthdayAPI.deleteBirthday = async (birthdayId) => {
  return await tryCatchFetch(() =>
    axios.delete(`${BASE_URL}birthdays/${birthdayId}/`)
  );
};

export default birthdayAPI;
