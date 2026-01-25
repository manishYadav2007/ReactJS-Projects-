import "./index.css";

const NavBar = (props) => {
  const { clickedEmojisList, topScoreValue } = props;
  return (
    <>
      <nav className="navbar-container">
        <div className="navbar-content">
          <div className="logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
              alt="emoji logo"
              className="emoji-logo"
            />
            <h1 className="logo-text">Emoji Game</h1>
          </div>
          <div className="scores-container">
            <p className="score-text">Score: {clickedEmojisList}</p>
            <p className="score-text">Top Score: {topScoreValue}</p>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
