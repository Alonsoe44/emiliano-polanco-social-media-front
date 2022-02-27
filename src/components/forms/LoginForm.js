import { Button, Grid, Input, Spacer, Text } from "@nextui-org/react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUserThunk } from "../../redux/thunks/userThunks";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    onSubmit: ({ userName, password }) => {
      dispatch(loginUserThunk({ username: userName, password }));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid.Container gap={2} justify="center">
        <Grid xs={6}></Grid>
        <Spacer xs={12} y={5} />

        <Grid xs={6}>
          <Text
            h1
            size={60}
            css={{
              color: "black",
            }}
            weight="bold"
          >
            Let's
          </Text>
        </Grid>
        <Grid xs={6}>
          <Input
            id="userName"
            name="userName"
            onChange={formik.handleChange}
            type="text"
            value={formik.values.email}
            label="Username"
            color="default"
            autoComplete="off"
          />
        </Grid>
        <Grid xs={6}>
          <Text
            h1
            size={60}
            css={{
              color: "#051367",
            }}
            weight="bold"
          >
            Linkbook
          </Text>
        </Grid>
        <Grid xs={6}>
          <Input
            id="password"
            name="password"
            onChange={formik.handleChange}
            type="password"
            value={formik.values.email}
            label="Password"
            color="default"
          />
        </Grid>
        <Grid xs={6}></Grid>
        <Grid xs={6}>
          <Button type="submit" auto>
            Login
          </Button>
        </Grid>
        <Grid xs={6}></Grid>
        <Spacer y={2} />
        <Grid xs={6}></Grid>
        <Grid xs={6}>
          <Button
            type="button"
            color="success"
            onClick={() => {
              console.log("hi");
              navigate("/register");
            }}
            auto
          >
            Create account
          </Button>
        </Grid>
      </Grid.Container>
    </form>
  );
};

export default LoginForm;
