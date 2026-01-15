import { Component } from "react";
import EventItem from "../EventItem";
import "./index.css";
import ActiveEventRegistrationDetails from "../ActiveEventRegistrationDetails";

const eventsList = [
  {
    id: "f9bb2373-b80e-46b8-8219-f07217b9f3ce",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/event-canada-dance-festival-img.png",
    name: "Canada Dance Festival",
    location: "Canada, America",
    registrationStatus: "YET_TO_REGISTER",
  },
  {
    id: "c0040497-e9cb-4873-baa9-ef5b994abfff",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/events-kathakali-img.png",
    name: "Puthanalkkal Kalavela",
    location: "Karnataka, India",
    registrationStatus: "REGISTERED",
  },
  {
    id: "0037d5e4-4005-4030-987b-ce41b691b92a",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/events-kuchipudi-img.png",
    name: "Nithyopahara",
    location: "Kerala, India",
    registrationStatus: "REGISTRATIONS_CLOSED",
  },
  {
    id: "c9ff08cb-610c-4382-9939-78e5e50a72b2",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/events-bharatanatyam-img.png",
    name: "Shivam",
    location: "Andhra Pradesh, India",
    registrationStatus: "YET_TO_REGISTER",
  },
  {
    id: "d1153723-5b6e-4628-9a1a-ccd8f84f1273",
    imageUrl: "https://assets.ccbp.in/frontend/react-js/events-kolatam-img.png",
    name: "Janapada Kolatam",
    location: "Tamil Nadu, India",
    registrationStatus: "REGISTERED",
  },
  {
    id: "7d6ec013-d0ae-4d84-b776-14b733a9174f",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/event-colonial-fest-img.png",
    name: "Colonial Fest",
    location: "Washington, America",
    registrationStatus: "REGISTRATIONS_CLOSED",
  },
];

class Events extends Component {
  state = {
    activeEventId: "",
  };

  setActiveEventId = (id) => {
    this.setState({
      activeEventId: id,
    });
  };
  render() {
    const { activeEventId } = this.state;

    const activeEvent = eventsList.find(
      (eachEvent) => eachEvent.id === activeEventId
    );
    console.log(activeEvent);

    const activeEventStatus = activeEvent
      ? activeEvent.registrationStatus
      : "INITIAL";

    console.log(activeEventStatus);

    return (
      <div className="bg-container">
        <div className="events-wrapper">
          <h1 className="events-heading">Events</h1>
          <ul className="events-container">
            {eventsList.map((eachEvent) => (
              <EventItem
                eventsListItems={eachEvent}
                setActiveEventId={this.setActiveEventId}
                key={eachEvent.id}
                isActive={activeEventId === eachEvent.id}
              />
            ))}
          </ul>
        </div>
        <div className="active-events-registration-details">
          <ActiveEventRegistrationDetails
            activeEventRegistrationStatus={activeEventStatus}
          />
        </div>
      </div>
    );
  }
}

export default Events;
