import mockAxios from "../../setupTests";
import actionTypes from "../actions/actionTypes";
import { loadUsersThunk } from "./allUsersThunks";

afterEach(() => {
  mockAxios.reset();
});

const apiResponse = {
  data: {
    users: [
      {
        __v: 0,
        _id: "6219fa6a6071fb839e35e7f8",
        birthDate: "2000-09-03",
        connections: [],
        email: "giorno123@gmail.com",
        lastName: "Giovanna",
        name: "GiornoR",
        password:
          "$2b$10$fgH26I4zW9pNjKe1hsQUlO.1yVQKu1s.4rqqzHNWzwvKCcEsu3ufW",
        username: "goldenWind1",
      },
      {
        __v: 0,
        _id: "621a2cc1df530a2171f3c713",
        birthDate: "2000-09-03",
        connections: [],
        email: "giorno123@gmail.com",
        lastName: "Giovanna",
        name: "GfnoR",
        password:
          "$2b$10$MQgSZwmGrhjGloND48xNh.K9dGunzPeFrajsPMrSFPOcEWnmGo9zm",
        username: "goldenWindr1",
      },
    ],
  },
};

describe("Given a loadAllUsersThunk", () => {
  describe("When its called and has a valid token in the storage", () => {
    test("Then it should call the dispatch method passing the loadUsersAction", async () => {
      const mockDispatch = jest.fn();

      const users = await loadUsersThunk(mockDispatch);
      const expectedAction = {
        type: actionTypes.loadUsers,
        usersGroup: [
          {
            __v: 0,
            _id: "6219fa6a6071fb839e35e7f8",
            birthDate: "2000-09-03",
            connections: [],
            email: "giorno123@gmail.com",
            lastName: "Giovanna",
            name: "GiornoR",
            password:
              "$2b$10$fgH26I4zW9pNjKe1hsQUlO.1yVQKu1s.4rqqzHNWzwvKCcEsu3ufW",
            username: "goldenWind1",
          },
          {
            __v: 0,
            _id: "621a2cc1df530a2171f3c713",
            birthDate: "2000-09-03",
            connections: [],
            email: "giorno123@gmail.com",
            lastName: "Giovanna",
            name: "GfnoR",
            password:
              "$2b$10$MQgSZwmGrhjGloND48xNh.K9dGunzPeFrajsPMrSFPOcEWnmGo9zm",
            username: "goldenWindr1",
          },
        ],
      };
      mockAxios.get.mockResolvedValueOnce(apiResponse);

      expect(mockDispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});
