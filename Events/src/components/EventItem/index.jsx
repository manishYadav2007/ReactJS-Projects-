import "./index.css";

const EventItem = (props) => {
  const { eventsListItems } = props;
  const { id, imageUrl, name, location, registrationStatus } = eventsListItems;

  const onClickEventItem = () => {
    console.log("Clicked Event Item:", name);
  };

  return (
    <li className="event-item">
      <button className="click-img" onClick={onClickEventItem}>
        <img src={imageUrl} alt={name} className="event-item-img" />
      </button>
      <h1 className="event-item-name">{name}</h1>
      <p className="events-location">{location}</p>
    </li>
  );
};

export default EventItem;
