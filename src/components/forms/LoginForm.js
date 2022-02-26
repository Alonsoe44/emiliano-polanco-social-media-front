import { Button, Grid, Input } from "@nextui-org/react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    onSubmit: ({ userName, password }) => {
      const credentials = {
        userName: userName,
        password: password,
      };
      (async () => {
        const response = await fetch(process.env.REACT_APP_API_URL_LOGIN, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(credentials),
        });
        // window.localStorage.token = token;
        const token = await response.json();
        console.log(token);
        // navigate("/toMuseum");
      })();
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid.Container
        gap={2}
        justify="center"
        direction="column"
        alignContent="center"
      >
        <Grid>
          <Input
            id="userName"
            name="userName"
            onChange={formik.handleChange}
            type="text"
            value={formik.values.email}
            label="Username"
            color="default"
          />
        </Grid>
        <Grid>
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

        <Grid>
          <Button type="submit" color="success" auto>
            Login
          </Button>
        </Grid>
      </Grid.Container>
    </form>
  );
};

export default LoginForm;
