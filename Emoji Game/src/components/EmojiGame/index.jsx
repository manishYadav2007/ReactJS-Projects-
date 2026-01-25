import React from "react";
import EmojiCard from "../EmojiCard";
import NavBar from "../NavBar";

import "./index.css";
import WinOrLoseCard from "../WinOrLoseCard";

class EmojiGame extends React.Component {
  state = {
    topScore: 0,
    clickedEmojisList: [],
    isGameInProgress: true,
  };

  finishGameAndSetTopScore = (currentScore) => {
    const { topScore } = this.state;
    let newTopScore = topScore;
    if (currentScore > topScore) {
      newTopScore = currentScore;
    }

    this.setState({
      topScore: newTopScore,
      isGameInProgress: false,
    });
  };

  trackEmojiClick = (emojiId) => {
    const { clickedEmojisList } = this.state;
    const { emojisList } = this.props;

    const isEmojiAlreadyClicked = clickedEmojisList.includes(emojiId);
    const clickedEmojiLength = clickedEmojisList.length;

    if (isEmojiAlreadyClicked) {
      this.finishGameAndSetTopScore(clickedEmojiLength);
    } else {
      if (emojisList.length - 1 === clickedEmojiLength) {
        this.finishGameAndSetTopScore(emojisList.length);
      }

      this.setState((prevState) => ({
        clickedEmojisList: [...prevState.clickedEmojisList, emojiId],
      }));
    }
  };

  getShuffledEmojisList = () => {
    const { emojisList } = this.props;
    return emojisList.sort(() => Math.random() - 0.5);
  };

  resetGame = () => {
    this.setState({ clickedEmojisList: [], isGameInProgress: true });
  };

  render() {
    const { clickedEmojisList, isGameInProgress, topScore } = this.state;
    const { emojisList } = this.props;
    const isWon = clickedEmojisList.length === emojisList.length;
    const shuffledEmojisList = this.getShuffledEmojisList();
    return (
      <>
        <NavBar
          clickedEmojisList={clickedEmojisList.length}
          topScoreValue={topScore}
        />
        <div className="emoji-game-body">
          {isGameInProgress ? (
            <ul className="emojis-list-container">
              {shuffledEmojisList.map((eachEmoji) => (
                <EmojiCard
                  key={eachEmoji.id}
                  emojiDetails={eachEmoji}
                  trackEmojiClick={this.trackEmojiClick}
                />
              ))}
            </ul>
          ) : (
            <WinOrLoseCard
              score={clickedEmojisList.length}
              isWon={isWon}
              resetGame={this.resetGame}
            />
          )}
        </div>
      </>
    );
  }
}

export default EmojiGame;
