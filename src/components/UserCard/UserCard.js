import { Button } from "@nextui-org/react";
import { HiUserAdd } from "react-icons/hi";
import "./UserCard.css";
const UserCard = ({ name, lastname }) => {
  return (
    <div className="card-user">
      <img
        className="card-user__picture"
        src="./stock-woman.jpg"
        alt="stock-woman"
      />
      <h3 className="card-user__names">
        {name} {lastname}
      </h3>
      <Button
        className="add-button-media"
        auto
        color="default"
        icon={<HiUserAdd fill="currentColor" filled />}
      />
    </div>
  );
};

export default UserCard;
