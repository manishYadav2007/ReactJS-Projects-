import "./index.css";

const EmojiCard = (props) => {
  const { emojiDetails, trackEmojiClick } = props;
  const { id, emojiName, emojiUrl } = emojiDetails;
  const onClickTrackEmojiItem = () => {
    trackEmojiClick(id);
  };
  return (
    <li className="emoji-item">
      <button
        type="button"
        className="emoji-btn"
        onClick={onClickTrackEmojiItem}
      >
        <img src={emojiUrl} alt={emojiName} className="emoji-icon" />
      </button>
    </li>
  );
};

export default EmojiCard;
