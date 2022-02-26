import actionTypes from "./actionTypes";

export const loginUserAction = (userData) => ({
  type: actionTypes.loginUser,
  userData,
});

export const registerNewUserAction = (newUserData) => ({
  type: actionTypes.registerNewUser,
  newUserData,
});

export const loadUsersAction = (usersGroup) => ({
  type: actionTypes.loadUsers,
  usersGroup,
});

export const filterFriendsAction = (filteringObject) => ({
  type: actionTypes.filterFriends,
  filteringObject,
});
