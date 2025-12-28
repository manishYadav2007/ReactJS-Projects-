import { useState } from "react";
import "./index.css";
import { format } from "date-fns";
const AppointmentItem = (props) => {
  const { appointmentsListItems, toggleIsStarred, isStarred } = props;
  const { id, title, date } = appointmentsListItems;
  const formattedDate = format(new Date(date), "dd MMMM yyyy, EEEE");

  const starImage =
    "https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png";
  const activeStarImage =
    "https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png";

  const onClickToggleBookmark = () => {
    toggleIsStarred(id);
  };

  return (
    <>
      <li className="appointments-lists">
        <div className="list-item-header">
          <p className="appointments-title">{title}</p>
          <button
            data-testid="star"
            onClick={onClickToggleBookmark}
            className="bookmark-toggle-btn"
          >
            <img
              className="star-img"
              src={isStarred ? activeStarImage : starImage}
              alt="star"
            />
          </button>
        </div>
        <p className="date">{`Date: ${formattedDate}`}</p>
      </li>
    </>
  );
};

export default AppointmentItem;
