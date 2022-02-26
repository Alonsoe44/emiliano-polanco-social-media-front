import axios from "axios";
import jsonwebtoken from "jsonwebtoken";
import {
  filterFriendsAction,
  loadUsersAction,
} from "../actions/actionsCreator";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiR2Zub1IiLCJsYXN0TmFtZSI6Ikdpb3Zhbm5hIiwiZW1haWwiOiJnaW9ybm8xMjNAZ21haWwuY29tIiwiYmlydGhEYXRlIjoiMjAwMC0wOS0wMyIsInVzZXJuYW1lIjoiZ29sZGVuV2luZHIxIiwiX2lkIjoiNjIxYTJjYzFkZjUzMGEyMTcxZjNjNzEzIiwiaWF0IjoxNjQ1ODgyNTYxfQ.w9wojSCESLygsTG5tj9T5D5Acathz6rGj4m--_52DWI";
const apiUrl = process.env.REACT_APP_API_URL;

export const loadUsersThunk = async (dispatch) => {
  const response = await axios.get(`${apiUrl}home`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const allUsers = response.data.users;

  dispatch(loadUsersAction(allUsers));
};

export const filterFriendsThunk = async (dispatch) => {
  const response = await axios.get(`${apiUrl}home`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const allUsers = response.data.users;
  const cleanUsers = allUsers.map((regularUser) => ({
    ...regularUser,
    password: null,
  }));

  const actualUserPayloadToken = await jsonwebtoken.decode(token);
  const actualUserData = allUsers.find(
    (user) => user._id === actualUserPayloadToken._id
  );

  const filteringObject = {
    actualUserConections: actualUserData.connections,
    allUsers: cleanUsers,
  };

  dispatch(filterFriendsAction(filteringObject));
};
