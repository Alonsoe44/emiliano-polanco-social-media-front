import { Button } from "@nextui-org/react";
import "./HomePage.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { loadUsersThunk } from "../../redux/thunks/allUsersThunks";
import NavegationBar from "../NavegationBar/NavegationBar";
import UserCard from "../UserCard/UserCard";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsersThunk);
  }, [dispatch]);

  const allUsers = useSelector((state) => state.allUsers);
  // const theUser = useSelector((state) => state.user);

  return (
    <>
      <NavegationBar />
      <div className="white-space"></div>
      <div className="home-page">
        {allUsers.map((user) => (
          <UserCard name={user.name} lastname={user.lastName} key={user._id} />
        ))}
      </div>
      <Button
        onClick={() => {
          localStorage.removeItem("token");
        }}
      >
        LogOut
      </Button>
    </>
  );
};

export default HomePage;
