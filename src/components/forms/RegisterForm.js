import { Button, Grid, Input, Spacer, Text } from "@nextui-org/react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
import { registerUserThunk } from "../../redux/thunks/userThunks";

const RegisterForm = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      email: "",
      username: "",
      password: "",
      birthDate: "",
    },
    onSubmit: (userData) => {
      dispatch(registerUserThunk(userData));
      navigate("/home");
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid.Container gap={2} justify="center">
        <Grid xs={6}></Grid>
        <Spacer xs={12} y={5} />
        <Grid xs={6}>
          <Input
            id="name"
            name="name"
            onChange={formik.handleChange}
            type="text"
            label="Name"
            color="default"
          />
        </Grid>

        <Grid xs={6}>
          <Input
            id="lastname"
            name="lastname"
            label="Lastname"
            type="text"
            onChange={formik.handleChange}
          />
        </Grid>
        <Grid xs={6}>
          <Input
            id="email"
            name="email"
            label="Email"
            type="email"
            onChange={formik.handleChange}
          />
        </Grid>
        <Grid xs={6}>
          <Text
            h1
            size={60}
            css={{
              color: "black",
            }}
            weight="bold"
          >
            :)
          </Text>
        </Grid>

        <Grid xs={6}>
          <Input
            id="username"
            name="username"
            label="Username"
            type="text"
            onChange={formik.handleChange}
          />
        </Grid>

        <Grid xs={6}>
          <Input
            id="password"
            name="password"
            label="New password"
            type="password"
            onChange={formik.handleChange}
          />
        </Grid>

        <Grid xs={6}>
          <Input
            id="birthDate"
            name="birthDate"
            label="Date of birth"
            type="date"
            onChange={formik.handleChange}
          />
        </Grid>

        <Grid xs={6}>
          <Button type="submit" color="success" auto>
            Register
          </Button>
        </Grid>
      </Grid.Container>
    </form>
  );
};

export default RegisterForm;
