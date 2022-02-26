import {
  filterFriendsAction,
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
  describe("When it called with a users group", () => {
    test("Then it should return an action with the right type and payload", () => {
      const usersGroup = [0, 0, 0, 0, 0];
      const expectedAction = {
        type: actionTypes.loadUsers,
        usersGroup,
      };

      const receivedAction = loadUsersAction(usersGroup);

      expect(receivedAction).toEqual(expectedAction);
    });
  });
});

describe("Given a filterFriendsAction", () => {
  describe("When it's called with the filteringObject", () => {
    test("Then it should return an action with the right type and the payload", () => {
      const filteringObject = {
        actualUserConections: [],
        allUsers: [],
      };

      const expectedAction = {
        type: actionTypes.filterFriends,
        filteringObject,
      };

      const receivedAction = filterFriendsAction(filteringObject);

      expect(receivedAction).toEqual(expectedAction);
    });
  });
});
