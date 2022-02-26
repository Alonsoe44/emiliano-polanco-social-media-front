import actionTypes from "../actions/actionTypes";

const allUsersReducer = (currentUsers = [], action = {}) => {
  let newUsers;
  switch (action.type) {
    case actionTypes.loadUsers:
      newUsers = [...action.usersGroup];
      break;
    case actionTypes.filterFriends:
      const { actualUserConections, allUsers } = action.filteringObject;
      newUsers = allUsers.filter((user) =>
        actualUserConections.find(
          (conectionUser) =>
            conectionUser.userId === user._id &&
            conectionUser.relation === "friend"
        )
      );
      break;
    default:
      newUsers = [...currentUsers];
      break;
  }

  return newUsers;
};

export default allUsersReducer;
