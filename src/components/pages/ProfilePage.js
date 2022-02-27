import { Text } from "@nextui-org/react";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { loadUsersThunk } from "../../redux/thunks/allUsersThunks";
import NavegationBar from "../NavegationBar/NavegationBar";

const ProfilePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUsersThunk);
  });
  const {
    profile: { name, lastName },
  } = useSelector((state) => state.user);
  return (
    <>
      <NavegationBar />
      <div className="white-space"></div>
      <Text
        h1
        size={60}
        css={{
          textGradient: "45deg, $blue500 -20%, $pink500 50%",
        }}
        weight="bold"
      >
        Hellow {name} {lastName}
      </Text>
      <Text
        h1
        size={60}
        css={{
          textGradient: "45deg, $purple500 -20%, $pink500 100%",
        }}
        weight="bold"
      >
        :)
      </Text>
      <Text
        h1
        size={60}
        css={{
          textGradient: "45deg, $yellow500 -20%, $red500 100%",
        }}
        weight="bold"
      >
        It's great to see you again
      </Text>
    </>
  );
};

export default ProfilePage;
