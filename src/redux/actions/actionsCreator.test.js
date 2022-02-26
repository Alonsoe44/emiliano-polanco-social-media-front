import {
  loadUsersAction,
  loginUserAction,
  registerNewUserAction,
} from "./actionsCreator";
import actionTypes from "./actionTypes";

describe("Given a loginUserAction", () => {
  describe("When it receives an object with credentials", () => {
    test("Then it should return an action with the expectec type and payload", () => {
      const normalData = {
        superData: "yes i am",
      };
      const expectedAction = {
        type: actionTypes.loginUser,
        userData: normalData,
      };

      const receivedAction = loginUserAction(normalData);

      expect(receivedAction).toEqual(expectedAction);
    });
  });
});

describe("Given a registerNewUserAction", () => {
  describe("When it receives and object in the userData", () => {
    test("Then it should return an action with the expected type and payload", () => {
      const normalData = {
        superData: "yes i am",
      };
      const expectedAction = {
        type: actionTypes.registerNewUser,
        newUserData: normalData,
      };

      const receivedAction = registerNewUserAction(normalData);

      expect(receivedAction).toEqual(expectedAction);
    });
  });
});

describe("Given a loadUsersAction", () => {
  describe("When it called", () => {
    test("Then it should return an action with the right type", () => {
      const expectedAction = {
        type: actionTypes.loadUsers,
      };

      const receivedAction = loadUsersAction();

      expect(receivedAction).toEqual(expectedAction);
    });
  });
});
