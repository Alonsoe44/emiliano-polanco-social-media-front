import actionTypes from "../actions/actionTypes";
import allUsersReducer from "./allUsersReducer";
const currentUsers = [
  {
    name: "rR",
    lastName: "Gioa",
    email: "giorno123@gmail.com",
    birthDate: "2000-09-03",
    username: "goldndr1",
    _id: "1",
  },
  {
    name: "Gaaaaaaaaaaaaaaaa",
    lastName: "nna",
    email: "giorno123@gmail.com",
    birthDate: "2000-09-03",
    username: "gonWindr1",
    _id: "5",
  },
  {
    name: "Gfnfffffffffff",
    lastName: "fdnna",
    email: "gio3@gmail.com",
    birthDate: "2000-09-03",
    username: "golddsfdr1",
    _id: "9",
  },
  {
    name: "Gffd",
    lastName: "Giovanna",
    email: "gior123@gmail.com",
    birthDate: "2000-09-03",
    username: "goldenWi4324",
    _id: "15",
  },
  {
    name: "Gffd",
    lastName: "Gfdf8df7fd878na",
    email: "gior123@gmail.com",
    birthDate: "2000-09-03",
    username: "golexpepriencei4324",
    _id: "2",
  },
];

describe("Given an allUsersReducer", () => {
  describe("When it receives a loadAllUsersAction with a new users in the payload", () => {
    test("Then it should return the new group of users", () => {
      const newUsersPayload = [
        {
          name: "Vladimir",
          lastName: "Normin",
          email: "gio3@gmail.com",
          birthDate: "2000-09-03",
          username: "Lovingred",
        },
        {
          name: "Francheco",
          lastName: "Giolini",
          email: "gittrefico23@gmail.com",
          birthDate: "1970-09-03",
          username: "goliceice4",
        },
      ];

      const expectedUsers = [...newUsersPayload];

      const action = {
        type: actionTypes.loadUsers,
        usersGroup: newUsersPayload,
      };
      const newUsersState = allUsersReducer(currentUsers, action);

      expect(newUsersState).toEqual(expectedUsers);
    });
  });

  describe("When it receives a filterFriendsAction and a filteringObject", () => {
    test("Then it should return the new group of friendly ussers", () => {
      const UserConnections = [
        {
          userId: "3",
          relation: "enemy",
        },
        {
          userId: "1",
          relation: "friend",
        },
        {
          userId: "5",
          relation: "friend",
        },
        {
          userId: "15",
          relation: "enemy",
        },
      ];
      const expectedFriends = [
        {
          name: "rR",
          lastName: "Gioa",
          email: "giorno123@gmail.com",
          birthDate: "2000-09-03",
          username: "goldndr1",
          _id: "1",
        },
        {
          name: "Gaaaaaaaaaaaaaaaa",
          lastName: "nna",
          email: "giorno123@gmail.com",
          birthDate: "2000-09-03",
          username: "gonWindr1",
          _id: "5",
        },
      ];

      const action = {
        type: actionTypes.filterFriends,
        filteringObject: {
          actualUserConections: UserConnections,
          allUsers: currentUsers,
        },
      };
      const newFriends = allUsersReducer(currentUsers, action);

      expect(newFriends).toEqual(expectedFriends);
    });
  });
});
