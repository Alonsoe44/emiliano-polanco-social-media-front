import { Link } from "react-router-dom";
import "./NavegationBar.css";

const NavegationBar = () => {
  return (
    <nav className="navegation-bar">
      <ul className="navegation-bar__list">
        <li className="navegation-bar__item">
          <span className="navegation__text">Linkbook</span>
        </li>
        <li className="navegation-bar__item glass">
          <span className="navegation__text">Friends</span>
        </li>
        <li className="navegation-bar__item">
          <span className="navegation__text">Not friendly friends</span>
        </li>
        <li className="navegation-bar__item">
          <Link to="/home">
            <span className="navegation__text">My profile</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavegationBar;
