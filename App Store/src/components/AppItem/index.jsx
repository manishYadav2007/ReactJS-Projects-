import "./index.css";
const AppItem = (props) => {
  const { eachAppStoreData } = props;
  const { appId, appName, imageUrl } = eachAppStoreData;

  return (
    <li className="app-store-card-item">
      <img src={imageUrl} alt={appName} className="logo-img" />
      <p className="card-title">{appName}</p>
    </li>
  );
};

export default AppItem;
