import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoginForm from "../forms/LoginForm";

const LoginPage = () => {
  let navigate = useNavigate();

  const userState = useSelector((state) => {
    return state.user;
  });

  if (userState.profile.name) {
    navigate("/home");
  }

  return (
    <div className="login-page">
      <img className="background-image" alt="" />
      <LoginForm />
    </div>
  );
};

export default LoginPage;
