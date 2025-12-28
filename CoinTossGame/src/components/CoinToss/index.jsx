import React from "react";
import "./index.css";
class CoinToss extends React.Component {
  state = {
    headCount: 0,
    tailCount: 0,
    currentCoinface: "heads",
  };

  onClickTossButton = () => {
    const { headCount, tailCount } = this.state;
    const tossResult = Math.floor(Math.random() * 2);

    if (tossResult === 0) {
      this.setState({
        headCount: headCount + 1,
        currentCoinface: "heads",
      });
    } else {
      this.setState({
        tailCount: tailCount + 1,
        currentCoinface: "tails",
      });
    }
    {
    }
  };

  render() {
    const { headCount, tailCount, currentCoinface } = this.state;
    const HEADS_COIN = "https://assets.ccbp.in/frontend/react-js/heads-img.png";
    const TAILS_COIN = "https://assets.ccbp.in/frontend/react-js/tails-img.png";
    const currentCoinfaceCoin =
      currentCoinface === "heads" ? HEADS_COIN : TAILS_COIN;
    return (
      <div className="bg">
        <div className="container">
          <h1 className="title">Coin Toss Game</h1>
          <p className="sub-title">Heads (or) Tails</p>
          <div className="randamonized-image">
            <img
              src={currentCoinfaceCoin}
              alt="toss-result"
              className="toss-img"
            />
          </div>
          <button onClick={this.onClickTossButton} className="toss-coin-btn">
            Toss Coin
          </button>
          <div className="result-container">
            <p className="result">Total: {headCount + tailCount}</p>
            <p className="result">Heads: {headCount}</p>
            <p className="result">Tails: {tailCount}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default CoinToss;
