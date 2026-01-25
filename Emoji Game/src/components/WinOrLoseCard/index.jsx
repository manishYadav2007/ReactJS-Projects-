import "./index.css";

const WinOrLoseCard = (props) => {
  const { isWon, score, resetGame } = props;
  const gameStatus = isWon ? "You Won" : "You Lose";
  const scoreLabel = isWon ? "Best Score" : "Score";

  const onClickPlayAgain = () => {
    resetGame();
  };

  const imageUrl = isWon
    ? "https://assets.ccbp.in/frontend/react-js/won-game-img.png"
    : "https://assets.ccbp.in/frontend/react-js/lose-game-img.png";
  return (
    <div className="win-loss-card">
      <div className="details-section">
        <h1 className="game-status">{gameStatus}</h1>
        <p className="current-score-label">{scoreLabel}</p>
        <p className="current-score-value">{score}/12</p>
        <button
          type="button"
          className="play-again-btn"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
      <div className="image-section">
        <img src={imageUrl} alt="win or lose" className="win-loss-img" />
      </div>
    </div>
  );
};

export default WinOrLoseCard;
