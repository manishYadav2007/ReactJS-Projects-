import "./index.css";

const TabItem = (props) => {
  const { tabsListItem, onChangeNavigateTabItem, isTabItemClicked } = props;
  const { tabId, displayText } = tabsListItem;

  const activeTabClass = isTabItemClicked ? "active-tab" : null;

  const onClickTabItem = () => {
    onChangeNavigateTabItem(tabId);
  };

  return (
    <li onClick={onClickTabItem}>
      <button className={`tab-item-btn tab-item ${activeTabClass}`}>
        {displayText}
      </button>
    </li>
  );
};

export default TabItem;
