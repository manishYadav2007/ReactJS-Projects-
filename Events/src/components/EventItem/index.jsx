import "./index.css";

const EventItem = (props) => {
  const { eventsListItems, setActiveEventId, isActive } = props;
  const { id, imageUrl, name, location } = eventsListItems;

  const onClickEventItem = () => {
    setActiveEventId(id);
  };

  const activeEventItemClassName = isActive
    ? "active-event-item active"
    : "event-item-normal";

  return (
    <li className="event-item">
      <button className="click-img" onClick={onClickEventItem}>
        <img src={imageUrl} alt="event" className={activeEventItemClassName} />
      </button>
      <p className="event-item-name">{name}</p>
      <p className="events-location">{location}</p>
    </li>
  );
};

export default EventItem;
