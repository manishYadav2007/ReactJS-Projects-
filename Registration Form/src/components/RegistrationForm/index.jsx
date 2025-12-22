import React, { useState } from "react";
import "./index.css";
const RegistrationForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);

  const onChangeFirstName = (event) => {
    setFirstName(event.target.value);
  };

  const onChangeLastName = (event) => {
    setLastName(event.target.value);
  };

  const onSubmitFormData = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="bg">
        <div className="container">
          <h1 className="title">Registration</h1>
          <div className="registration-container">
            <form onSubmit={onSubmitFormData}>
              <div className="first-name-input-box">
                <label htmlFor="first-name">First Name</label>
                <input
                  onChange={onChangeFirstName}
                  onBlur={onBlurFirstName}
                  type="text"
                  placeholder="First Name"
                  id="first-name"
                />
                <p className="error-msg">*Required</p>
              </div>
              <div className="first-name-input-box">
                <label htmlFor="last-name">Last Name</label>
                <input
                  onChange={onChangeLastName}
                  onBlur={onBlurLastName}
                  type="text"
                  placeholder="First Name"
                  id="last-name"
                />
                <p className="error-msg">*Required</p>
              </div>
              <div className="button-container">
                <button type="submit" className="submit-button">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrationForm;
