import { Component } from "react";
import DenominationListItem from "../DenominationItem";
import "./index.css";

class CashWithdrawal extends Component {
  state = {
    initialAmount: 2000,
  };

  onClickWithdrawAmount = (value) => {
    const { initialAmount } = this.state;

    if (initialAmount >= value) {
      this.setState((prevState) => ({
        initialAmount: prevState.initialAmount - value,
      }));
    } else {
      alert("Insufficient Balance");
    }
  };

  render() {
    const { denominationsList } = this.props;
    const { initialAmount } = this.state;
    const userName = "Sarah Williams";
    const profieAvatar = userName.slice(0, 1);
    return (
      <div className="bg">
        <div className="card">
          <div className="card-body">
            <div className="profile-continer">
              <div className="profile-avatar">{profieAvatar}</div>
              <h1 className="user-name">{userName}</h1>
            </div>
            <div className="balance-container">
              <p className="balance">Your Balance</p>
              <p className="current-balance">
                {initialAmount} <br />
                <span className="in-rupee">In Rupees</span>
              </p>
            </div>

            <div className="amount-withdraw-container">
              <div className="denomination-amount-btn">
                <p className="withdraw-title">Withdraw</p>
                <p className="choose-sum-title">Choose Sum (in Rupees)</p>
                <ul className="denomination-btn">
                  {denominationsList.map((eachDenomination) => (
                    <DenominationListItem
                      denominationsList={eachDenomination}
                      key={eachDenomination.id}
                      onClickWithdrawAmount={this.onClickWithdrawAmount}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CashWithdrawal;
