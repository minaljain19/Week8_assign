import axios from "axios";
const API = "APII";
const getData = "SETDATA";
// const Remove="Remove"
export const sendData = (data) => {
  return async (dispatch) => {
    try {
      const rs = await axios.get(`https://api.github.com/users/${data.login}`);
      console.log("every data", rs.data);
      const e = await axios.get(
        `https://api.github.com/users/${data.login}/repos`
      );
      console.log("repo data", e.data);
      dispatch({
        type: API,
        payload: {
          data: rs.data,
          repo: e.data,
        },
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: API,
        payload: ["data not Found"],
      });
    }
  };
};

export const getItem = (name) => {
  return async (dispatch) => {
    try {
      const ress = await axios.get(`https://api.github.com/search/users?q=${name}`);
      const arr = [ress.data.items];
      const arrr = arr[0];
      const newData = arrr.filter((user) => user.login.includes(name));
      console.log("filter data", newData);
      dispatch({
        type: getData,
        payload: newData,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: getData,
        payload: ["data not Found"],
      });
    }
  };
};
