import { Button } from "@nextui-org/react";
import { HiUserAdd } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addConnectionUserThunk } from "../../redux/thunks/userThunks";
import "./UserCard.css";
const UserCard = ({ name, lastname, thisUserId }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const userConnections = user.profile.connections;
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
        onClick={() => {
          dispatch(
            addConnectionUserThunk([
              ...userConnections,
              { userId: thisUserId, relation: "friend" },
            ])
          );
        }}
        className="add-button-media"
        auto
        color="default"
        icon={<HiUserAdd fill="currentColor" filled />}
      />
    </div>
  );
};

export default UserCard;
