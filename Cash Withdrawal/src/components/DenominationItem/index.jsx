






const DenominationListItem = (props) => {
  const { denominationsList, onClickWithdrawAmount } = props;
  const { value } = denominationsList;
  const onClickAmountValue = () => {
    onClickWithdrawAmount(value);
  };
  return (
    <li className="denomination-item">
      <button
        type="button"
        className="denomination-button"
        onClick={onClickAmountValue}
      >
        {value}
      </button>
    </li>
  );
};

export default DenominationListItem;
