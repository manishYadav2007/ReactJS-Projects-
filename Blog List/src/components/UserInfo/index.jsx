import "./index.css";

const UserInfo = () => {
  return (
    <div className="profile-container">
      <div className="profile-img-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
          className="profile-img"
          alt="profile"
        />
        <h1 className="title">Wade Warren</h1>
        <p className="designation">Software Developer at UK</p>
      </div>
    </div>
  );
};

export default UserInfo;
