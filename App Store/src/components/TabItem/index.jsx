import "./index.css";

const TabItem = (props) => {
  const { tabsListItem, onChangeNavigateTabItem, isTabItemClicked } = props;
  const { tabId, displayText } = tabsListItem;

  const activeTabClass = isTabItemClicked ? "active-tab" : null;

  const onClickTabItem = () => {
    onChangeNavigateTabItem(tabId);
  };

  return (
    <li className={`tab-item ${activeTabClass}`}  onClick={onClickTabItem}>
      {displayText}
    </li>
  );
};

export default TabItem;
