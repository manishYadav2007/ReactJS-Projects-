import { use, useState } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showSubmitError, setShowSubmitError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();

  const onChangeReadUsername = (event) => {
    setUsername(event.target.value);
  };

  const onChangeReadUserPassword = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitSuccess = () => {
    return navigate("/", { replace: true });
  };

  const onSubmitFailure = (errorMsg) => {
    setShowSubmitError(true);
    setErrorMsg(errorMsg);
  };

  const onSubmitUserData = async (event) => {
    event.preventDefault();

    if (username === "" && password === "") {
      return;
    }

    const userDetails = { username, password };
    const api = "https://apis.ccbp.in/login";
    const options = {
      method: "POST",
      body: JSON.stringify(userDetails),
    };

    const response = await fetch(api, options);
    const data = await response.json();
    console.log(data);

    if (response.ok) {
      onSubmitSuccess();
    } else {
      onSubmitFailure(data.error_msg);
    }
  };

  return (
    <>
      <div className="login-form-background">
        <div className="container">
          <div className="login-image">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
              alt="website login"
              className="website-login-img"
            />
          </div>
          <div className="login-form">
            <form onSubmit={onSubmitUserData} className="form-container">
              <div className="login-form-img-wrapper">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
                  alt="website logo"
                  className="login-form-img"
                />
              </div>
              <div className="username-input login-input">
                <label htmlFor="usernameInput" className="login-label">
                  USERNAME
                </label>
                <input
                  type="text"
                  placeholder="USERNAME"
                  id="usernameInput"
                  className="login-username"
                  value={username}
                  onChange={onChangeReadUsername}
                />
              </div>
              <div className="username-input login-input">
                <label htmlFor="passwordInput" className="login-label">
                  PASSWORD
                </label>
                <input
                  type="password"
                  id="passwordInput"
                  placeholder="PASSWORD"
                  className="login-username"
                  value={password}
                  onChange={onChangeReadUserPassword}
                />
              </div>
              <button type="submit" className="login-button">
                Login
              </button>

              {showSubmitError && <p className="error-msg">{`*${errorMsg}`}</p>}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
