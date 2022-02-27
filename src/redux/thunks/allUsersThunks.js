import axios from "axios";
import jwtDecode from "jwt-decode";
import {
  filterFriendsAction,
  loadUsersAction,
  loginUserAction,
} from "../actions/actionsCreator";

const apiUrl = process.env.REACT_APP_API_URL;

export const loadUsersThunk = async (dispatch) => {
  console.log(localStorage.getItem("token"));
  const response = await axios.get(`${apiUrl}home`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  const allUsers = response.data.users;

  const actualUser = await jwtDecode(localStorage.getItem("token"));
  const actualUserRefresh = allUsers.find(
    (user) => user._id === actualUser._id
  );
  dispatch(loginUserAction(actualUserRefresh));
  dispatch(loadUsersAction(allUsers));
};

export const filterFriendsThunk = async (dispatch) => {
  const response = await axios.get(`${apiUrl}home`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  const allUsers = response.data.users;
  const cleanUsers = allUsers.map((regularUser) => ({
    ...regularUser,
    password: null,
  }));

  const actualUserPayloadToken = await jwtDecode(localStorage.getItem("token"));
  const actualUserData = allUsers.find(
    (user) => user._id === actualUserPayloadToken._id
  );

  const filteringObject = {
    actualUserConections: actualUserData.connections,
    allUsers: cleanUsers,
  };

  dispatch(filterFriendsAction(filteringObject));
};
