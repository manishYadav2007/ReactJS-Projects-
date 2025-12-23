import React, { useState } from "react";
import "./index.css";
const RegistrationForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleBlurFirstName = () => {
    if (firstName === "") {
      setFirstNameError(true);
    } else {
      setFirstNameError(false);
    }
  };

  const handleBlurLastName = () => {
    if (lastName === "") {
      setLastNameError(true);
    } else {
      setLastNameError(false);
    }
  };
  const onChangeFirstName = (event) => {
    setFirstName(event.target.value);

    if (firstNameError) {
      setFirstNameError(false);
    }
  };

  const onChangeLastName = (event) => {
    setLastName(event.target.value);

    if (lastNameError) {
      setLastNameError(false);
    }
  };

  const onSubmitFormData = (event) => {
    event.preventDefault();

    const isFirstNameEmpty = firstName === "";
    const isLastNameEmpty = lastName === "";

    if (isFirstNameEmpty) setFirstNameError(true);
    if (isLastNameEmpty) setLastNameError(true);

    if (!isFirstNameEmpty && !isLastNameEmpty) {
      setIsSubmitted(true);
    }
  };

  const onClickSubmitAnother = () => {
    setIsSubmitted(false);
    setFirstName("");
    setLastName("");
  };

  const renderSuccessView = () => {
    return (
      <div className="registration-success-wrapper">
        <img
          src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          alt="success"
          className="success-img"
        />
        <p className="success-heading">Submitted Successfully</p>
        <button
          type="submit"
          onClick={onClickSubmitAnother}
          className="submit-another-response-btn"
        >
          Submit Another Response
        </button>
      </div>
    );
  };
  const onClickFormValidation = () => {
    if (firstName === "") {
      setFirstNameError(true);
    }
    if (lastName === "") {
      setLastNameError(true);
    }

    if (firstName === "" && lastName === "") {
      setFirstNameError(true);
      setLastNameError(true);
    }
  };

  const renderRegistrationForm = () => {
    return (
      <form onSubmit={onSubmitFormData}>
        <div className="first-name-input-box">
          <label htmlFor="first-name">First Name</label>
          <input
            onChange={onChangeFirstName}
            onBlur={handleBlurFirstName}
            type="text"
            value={firstName}
            placeholder="First Name"
            id="first-name"
            className={firstNameError ? "error-bg" : ""}
          />
          {firstNameError && <p className="error-msg">*Required</p>}
        </div>
        <div className="first-name-input-box">
          <label htmlFor="last-name">Last Name</label>
          <input
            onChange={onChangeLastName}
            onBlur={handleBlurLastName}
            type="text"
            value={lastName}
            placeholder="Last Name"
            className={lastNameError ? "error-bg" : ""}
            id="last-name"
          />
          {lastNameError && <p className="error-msg">*Required</p>}
        </div>
        <div className="button-container">
          <button
            type="submit"
            onClick={onClickFormValidation}
            className="submit-button"
          >
            Submit
          </button>
        </div>
      </form>
    );
  };

  return (
    <>
      <div className="bg">
        <div className="container">
          <h1 className="title">Registration</h1>
          <div className="registration-container">
            {isSubmitted ? renderSuccessView() : renderRegistrationForm()}
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrationForm;
