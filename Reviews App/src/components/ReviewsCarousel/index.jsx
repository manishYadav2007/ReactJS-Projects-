import React from "react";
import "./index.css";
class ReviewsCarousel extends React.Component {
  state = {
    activeIndex: 0,
  };

  onClickRightArrow = () => {
    const { reviewsList } = this.props;
    const { activeIndex } = this.state;

    if (activeIndex < reviewsList.length - 1) {
      this.setState({
        activeIndex: activeIndex + 1,
      });
    } else {
      this.setState({
        activeIndex: 0,
      });
    }
  };
  onClickLeftArrow = () => {
    const { activeIndex } = this.state;

    if (activeIndex === 0) {
      return;
    }

    this.setState((prevState) => ({
      activeIndex: prevState.activeIndex - 1,
    }));
  };

  render() {
    const { reviewsList } = this.props;
    const { activeIndex } = this.state;

    const currentReviewDetails = reviewsList[activeIndex];
    return (
      <div className="bg">
        <div className="review-container">
          <button
            data-testid="leftArrow"
            onClick={this.onClickLeftArrow}
            class="arrow-btn left-arrow"
            disabled={activeIndex === 0}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <div className="review-content">
            <h1 className="review-title">Reviews</h1>
            <div className="">
              <div className="img-box">
                <img
                  src={currentReviewDetails.imgUrl}
                  className="user-image"
                  alt={currentReviewDetails.username}
                />
                <p className="user-name">{currentReviewDetails.username}</p>
                <p className="company-name">
                  {currentReviewDetails.companyName}
                </p>
                <p className="review-text">
                  {currentReviewDetails.description}
                </p>
              </div>
            </div>
            <button
              data-testid="rightArrow"
              class="arrow-btn right-arrow"
              onClick={this.onClickRightArrow}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
              />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewsCarousel;
