import React from "react";
import {
  AiFillCheckCircle,
  AiFillCloseCircle,
  AiOutlineInfoCircle,
  AiOutlineWarning,
} from "react-icons/ai";

import "./index.css";
import Notification from "../Notification";

const messages = [
  {
    status: "Success",
    content: "You can access all the files in the folder",
    icon: AiFillCheckCircle,
    iconClassName: "success-icon",
  },
  {
    status: "Error",
    content: "Sorry, You are not authorized to have access to delete the file",
    icon: AiFillCloseCircle,
    iconClassName: "error-icon",
  },
  {
    status: "Warning",
    content: "Viewers of this file can see comments and suggestions",
    icon: AiOutlineWarning,
    iconClassName: "warning-icon",
  },
  {
    status: "Info",
    content: "Anyone on the internet can view these files",
    icon: AiOutlineInfoCircle,
    iconClassName: "info-icon",
  },
];

class AlertNotifications extends React.Component {
  render() {
    return (
      <>
        <ul>
          <h1 className="heading">Alert Notifications</h1>
          {messages.map((message) => {
            const Icon = message.icon;
            return (
              <Notification key={message.status}>
                <div className={message.iconClassName}>
                  <Icon className={message.iconClassName} />
                </div>
                <div className="message-content">
                  <p className={`status ${message.iconClassName}`}>{message.status}</p>
                  <p className={`notification-content`}>{message.content}</p>
                </div>
              </Notification>
            );
          })}
        </ul>
      </>
    );
  }
}

export default AlertNotifications;
