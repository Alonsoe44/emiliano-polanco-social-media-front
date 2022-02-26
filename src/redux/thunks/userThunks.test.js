import actionTypes from "../actions/actionTypes";
import { loginUserThunk, registerUserThunk } from "./userThunks";

describe("Given a loginUserThunk", () => {
  describe("When it receives the right credentials", () => {
    test("Then it should call the dispatch passin the loginUserAction", async () => {
      const theRightCredentials = {
        username: "goldenWind1",
        password: "pass123",
      };

      const mockDispatch = jest.fn();
      const expectedAction = {
        type: actionTypes.loginUser,
        userData: {
          name: "GiornoR",
          lastName: "Giovanna",
          email: "giorno123@gmail.com",
          birthDate: "2000-09-03",
          username: "goldenWind1",
          _id: "6219fa6a6071fb839e35e7f8",
        },
      };

      const loginThunk = loginUserThunk(theRightCredentials);

      await loginThunk(mockDispatch);

      expect(mockDispatch).toHaveBeenCalledWith(expectedAction);
    });
  });

  describe("When it receibes the wrong credentials", () => {
    test("Then it should call the dispatch passing in the loginUserAction", async () => {
      const theWrongCredentials = {
        username: "girononono",
        password: "134444",
      };
      const mockDispatch = jest.fn();
      const loginThunk = loginUserThunk(theWrongCredentials);

      await loginThunk(mockDispatch);

      const expectedAction = {
        type: actionTypes.loginUser,
        userData: {
          profile: {
            name: "no user",
          },
        },
      };

      expect(mockDispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});

/* describe("Given a registerUserThunk", () => {
  describe("When it receives the user data object", () => {
    test("It should call the method dispatch passing in the registerNewUserAction", async () => {
      const newUserData = {
        name: "GiornoR",
        lastName: "Giovanna",
        email: "giorno123@gmail.com",
        birthDate: "2000-09-03",
        username: "goldenWindRequiem",
        password: "pass123",
      };
      const expectedAction = {
        type: actionTypes.registerNewUser,
        newUserData: {
          name: "GiornoR",
          lastName: "Giovanna",
          email: "giorno123@gmail.com",
          birthDate: "2000-09-03",
          username: "goldenWindRequiem",
        },
      };
      const mockDispatch = jest.fn();

      const registerThunk = registerUserThunk(newUserData);

      await registerThunk(mockDispatch);

      expect(mockDispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});
 */
