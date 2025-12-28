import { useState } from "react";
import AppointmentItem from "../AppointmentItem";
import { v4 as uuidv4 } from "uuid";
import "./index.css";

const Appointments = () => {
  const [appointmentsList, setAppointmentsList] = useState([]);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [isFilterActive, setIsFilterActive] = useState(false);
  const onChangeTitleInput = (event) => {
    setTitle(event.target.value);
  };

  const onChangeDateInput = (event) => {
    setDate(event.target.value);
  };

  const onSubmitAppointmentsData = (event) => {
    event.preventDefault();

    if (title === "" || date === "") {
      return;
    }

    const newAppointmentData = {
      id: uuidv4(),
      title,
      date,
      isStarred: false,
    };

    setAppointmentsList((prevState) => [...prevState, newAppointmentData]);
    setTitle("");
    setDate("");
  };

  const toggleIsStarred = (id) => {
    setAppointmentsList((prevState) =>
      prevState.map((appointment) => {
        if (appointment.id === id) {
          return {
            ...appointment,
            isStarred: !appointment.isStarred,
          };
        }
        return appointment;
      })
    );
  };

  const onFilter = () => {
    setIsFilterActive((prevState) => !prevState);
  };

  const filteredAppointmentsList = isFilterActive
    ? appointmentsList.filter(
        (eachAppointment) => eachAppointment.isStarred === true
      )
    : appointmentsList;

  const filterClassName =    isFilterActive ? "active" : "inactive";
  return (
    <div className="background">
      <div className="container">
        <div className="appointments-container">
          <form onSubmit={onSubmitAppointmentsData}>
            <h1 className="title">Add Appointment</h1>
            <div className="appointments-title-input">
              <label htmlFor="titleInput">Title</label>
              <input
                onChange={onChangeTitleInput}
                placeholder="Enter Your Title here..."
                className="title-input"
                value={title}
                type="text"
                id="titleInput"
              />
            </div>
            <div className="appointments-title-input">
              <label htmlFor="dateInput">Date</label>
              <input
                value={date}
                onChange={onChangeDateInput}
                className="title-input"
                type="date"
                id="dateInput"
              />
            </div>
            <div className="button-container">
              <button type="submit"  className="add-appointments-btn">
                Add
              </button>
            </div>
          </form>
          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
              className="appointments-image"
            />
          </div>
        </div>
        <div className="appointments-list-container">
          <div className="appointments-header">
            <h2 className="appointments-title">Appointments</h2>
            <button
              className={`starred-button ${filterClassName}`}
              onClick={onFilter}
            >
              Starred
            </button>
          </div>

          <ul className="appointments-list-items">
            {filteredAppointmentsList.map((eachAppointment) => (
              <AppointmentItem
                appointmentsListItems={eachAppointment}
                key={eachAppointment.id}
                toggleIsStarred={toggleIsStarred}
                isStarred={eachAppointment.isStarred}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
