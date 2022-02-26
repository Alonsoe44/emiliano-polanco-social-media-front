import axios from "axios";
import jsonwebtoken from "jsonwebtoken";
import {
  loginUserAction,
  registerNewUserAction,
} from "../actions/actionsCreator";
const apiUrl = process.env.REACT_APP_API_URL;

export const loginUserThunk =
  ({ username, password }) =>
  async (dispatch) => {
    try {
      const response = await axios.post(apiUrl, {
        username,
        password,
      });
      const tokenString = response.data.token;
      const userData = await jsonwebtoken.decode(tokenString);
      delete userData.iat;
      dispatch(loginUserAction(userData));
    } catch (error) {
      const userData = {
        profile: {
          name: "no user",
        },
      };

      dispatch(loginUserAction(userData));
    }
  };

export const registerUserThunk = (newUserData) => async (dispatch) => {
  let response;
  try {
    response = await axios.post(`${apiUrl}register`, newUserData);
    const tokenString = response.data.token;
    const userData = await jsonwebtoken.decode(tokenString);
    delete userData.iat;
    dispatch(registerNewUserAction(userData));
  } catch (error) {
    dispatch(
      registerNewUserAction({
        profile: {
          name: "no user",
        },
      })
    );
  }
};
