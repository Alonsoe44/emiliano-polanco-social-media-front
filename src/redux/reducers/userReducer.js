import actionTypes from "../actions/actionTypes";
const initialState = {
  profile: {
    name: "",
    lastName: "",
    email: "",
    birthDate: "",
    username: "",
    connections: [],
  },
  submitedForm: false,
};

const userReducer = (userState = initialState, action = {}) => {
  let newUserState;
  switch (action.type) {
    case actionTypes.loginUser:
      newUserState = {
        profile: { ...userState.profile, ...action.userData },
        submitedForm: true,
      };
      break;
    case actionTypes.registerNewUser:
      newUserState = {
        profile: { ...userState.profile, ...action.newUserData },
        submitedForm: true,
      };
      break;
    case actionTypes.addConnections:
      newUserState = {
        profile: {
          ...userState.profile,
          connections: action.newConnections,
        },
        submitedForm: true,
      };
      break;
    default:
      newUserState = { ...userState };
  }
  return newUserState;
};

export default userReducer;
