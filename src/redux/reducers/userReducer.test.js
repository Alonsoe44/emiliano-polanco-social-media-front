import actionTypes from "../actions/actionTypes";
import userReducer from "./userReducer";

describe("Given a userReducer", () => {
  describe("When it's called with the currentUser and a loginAction with a payload", () => {
    test("Then it should return a new userState with the data of the action", () => {
      const userPayload = {
        name: "GiornoR",
        lastName: "Giovanna",
        email: "giorno123@gmail.com",
        birthDate: "2000-09-03",
        username: "goldenWind1",
      };

      const action = {
        type: actionTypes.loginUser,
        userData: userPayload,
      };

      const expectedUserState = {
        profile: { ...userPayload },
        submitedForm: true,
      };
      const newUserState = userReducer({}, action);

      expect(newUserState).toEqual(expectedUserState);
    });
  });

  describe("When it receibes a loginAction with empty payload", () => {
    test("Then it should return a new user state with empty data", () => {
      const action = {
        type: actionTypes.loginUser,
      };

      const expectedUserState = {
        profile: {
          name: "no user",
        },
        submitedForm: true,
      };

      const newUserState = userReducer(
        {
          profile: {
            name: "no user",
          },
        },
        action
      );

      expect(newUserState).toEqual(expectedUserState);
    });
  });

  describe("When it receives a registerAction with userPayload", () => {
    test("Then it should return a new state with the userPayload", () => {
      const userPayload = {
        name: "GiornoR",
        lastName: "Giovanna",
        email: "giorno123@gmail.com",
        birthDate: "2000-09-03",
        username: "goldenWind1",
      };

      const action = {
        type: actionTypes.loginUser,
        userData: userPayload,
      };

      const expectedUserState = {
        profile: { ...userPayload },
        submitedForm: true,
      };
      const newUserState = userReducer({}, action);

      expect(newUserState).toEqual(expectedUserState);
    });
  });
});
