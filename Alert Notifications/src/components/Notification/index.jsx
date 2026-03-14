import { GrFormClose } from "react-icons/gr";
import "./index.css";

const Notification = (props) => {
  const { children } = props;
  return (
    <li className="message-list-container">
      <div className="message-container">{children}</div>
      <div className="close-button">
        <GrFormClose className="close-icon" />
      </div>
    </li>
  );
};

export default Notification;
