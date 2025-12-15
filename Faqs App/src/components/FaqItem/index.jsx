// import "./index.css";
// import { useState } from "react";
// const FaqItem = (props) => {
//   const { faqData } = props;
//   const { id, questionText, answerText } = faqData;
//   const [isClicked, setIsClicked] = useState(false);

//   const onClickToggleFaqSection = () => {
//     setIsClicked(!isClicked);
//   };

//   const plusIcon =
//     "https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png";
//   const minusIcon =
//     "https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png";

//   return (
//     <li>
//       <div className="faq-list-container">
//         <p className="question">{questionText}</p>
//         <button onClick={onClickToggleFaqSection}>
//           <img
//             src={isClicked ? minusIcon : plusIcon}
//             className="icon-img"
//             alt={isClicked ? "minus" : "plus"}
//           />
//         </button>
//       </div>
//       {isClicked ? (
//         <div className="answer-container">
//           <p className="answer-text">{answerText}</p>
//         </div>
//       ) : null}
//     </li>
//   );
// };

// export default FaqItem;

import { Component } from "react";
import "./index.css";

class FaqItem extends Component {
  state = {
    isClicked: false,
  };

  onClickToggleFaqSection = () => {
    this.setState((prevState) => ({
      isClicked: !prevState.isClicked,
    }));
  };

  render() {
    const { isClicked } = this.state;
    const { faqData } = this.props;
    const { id, questionText, answerText } = faqData;

    const minusIcon =
      "https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png";
    const plusIcon =
      "https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png";

    return (
      <li>
        <div className="faq-list-container">
          <h1 className="question">{questionText}</h1>
          <button onClick={this.onClickToggleFaqSection}>
            <img
              src={isClicked ? minusIcon : plusIcon}
              className="icon-img"
              alt={isClicked ? "minus" : "plus"}
            />
          </button>
        </div>
        {isClicked ? (
          <div className="answer-container">
            <p className="answer-text">{answerText}</p>
          </div>
        ) : null}
      </li>
    );
  }
}

export default FaqItem;
