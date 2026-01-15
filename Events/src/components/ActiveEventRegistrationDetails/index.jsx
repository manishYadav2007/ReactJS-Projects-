import "./index.css";

const registrationStatusConstants = {
  initial: "INITIAL",
  yetToRegister: "YET_TO_REGISTER",
  registered: "REGISTERED",
  registrationsClosed: "REGISTRATIONS_CLOSED",
};

const ActiveEventRegistrationDetails = (props) => {
  const { activeEventRegistrationStatus } = props;
  const activeEventStatus = activeEventRegistrationStatus;
  // Register Here View

  const renderYetToRegisterView = () => (
    <div className="yet-to-register-view">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-to-register-img"
      />
      <p className="yet-to-register-description">
        A live performance brings so much to your relationship with dance.
        Seeing it live can often make you fall totally in love with dance.
      </p>
      <button className="register-button">Register Here</button>
    </div>
  );

  //  you have already registered View

  const renderRegisteredView = () => (
    <div className="registered-view">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered-view-img"
      />
      <h1 className="registered-description">
        You have already registered for this event.
      </h1>
    </div>
  );


  // Registration Closed View
  const registerClosedView = () => (
    <div className="register-closed-view">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="registration-closed-img"
      />
      <h1 className="registration-closed-description">
        Registrations Are Closed Now!
      </h1>
      <p className="registration-closed-sub-description">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  );

  // Initial View
  const initialView = () => (
    <div>
      <p className="message">
        Click on an event to view its registration details
      </p>
    </div>
  );

  const renderView = () => {
    switch (activeEventStatus) {
      case registrationStatusConstants.yetToRegister:
        return renderYetToRegisterView();
      case registrationStatusConstants.registered:
        return renderRegisteredView();
      case registrationStatusConstants.registrationsClosed:
        return registerClosedView();
      default:
        return initialView();
    }
  };

  return <>{renderView()}</>;
};

export default ActiveEventRegistrationDetails;
