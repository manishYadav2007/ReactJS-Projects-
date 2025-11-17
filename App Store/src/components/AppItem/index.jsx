import "./index.css";
const AppItem = (props) => {
  const { eachAppStoreData } = props;
  const { appId, appName, imageUrl } = eachAppStoreData;

  return (
    <li className="app-store-card-item">
      <div>
        <img src={imageUrl} alt={appName} className="logo-img" />
      </div>
      <h3 className="card-title">{appName}</h3>
    </li>
  );
};

export default AppItem;
