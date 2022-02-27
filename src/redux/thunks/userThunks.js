import axios from "axios";
import jwtDecode from "jwt-decode";
import {
  addConnectionsAction,
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
      const userData = await jwtDecode(tokenString);
      delete userData.iat;
      localStorage.setItem("token", tokenString);
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
    const userData = await jwtDecode(tokenString);
    delete userData.iat;
    localStorage.setItem("token", tokenString);
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

export const addConnectionUserThunk = (newConnections) => async (dispatch) => {
  let response;
  try {
    response = await axios.patch(
      `${apiUrl}edit-profile`,
      { connections: newConnections },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    const userData = response.data;

    dispatch(addConnectionsAction(userData.connections));
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
