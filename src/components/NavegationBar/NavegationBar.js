import { Button } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { filterFriendsThunk } from "../../redux/thunks/allUsersThunks";
import "./NavegationBar.css";

const NavegationBar = () => {
  const navigate = useNavigate();
  const theUser = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <nav className="navegation-bar">
      <ul className="navegation-bar__list">
        <li className="navegation-bar__item">
          <Button
            className="to-right-pls"
            onClick={() => {
              localStorage.removeItem("token");
              navigate("./myHome");
            }}
          >
            LogOut
          </Button>
        </li>
        <li className="navegation-bar__item glass">
          <span
            onClick={() => {
              navigate("/home");
              dispatch(filterFriendsThunk);
            }}
            className="navegation__text"
          >
            Friends
          </span>
        </li>
        <li className="navegation-bar__item">
          <span className="navegation__text">Not friendly friends</span>
        </li>
        <li className="navegation-bar__item">
          <Link to="/profile">
            <h3 className="navegation__text">
              {theUser.profile.name}'s profile
            </h3>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavegationBar;
