import { Button } from "@nextui-org/react";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { loadUsersThunk } from "../../redux/thunks/allUsersThunks";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsersThunk);
  }, [dispatch]);

  // const allUsers = useSelector((state) => state.allUsers);
  const theUser = useSelector((state) => state.user);

  return (
    <>
      <div>I am the HomePage of {theUser.profile.name} </div>
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
