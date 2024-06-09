import "./JournalItem.scss";

function JournalItem({ text, title }) {
  return (
    <>
      <h2 className="journal-item__header">{title}</h2>
      <h2 className="journal-item__body">
        <div className="journal-item__text">{text}</div>
      </h2>
    </>
  );
}

export default JournalItem;
