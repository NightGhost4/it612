function TeamCard(props) {
  return (
    <div className="card">
      <div className="emoji">{props.emoji}</div>
      <h3>{props.name}</h3>
      <p>{props.role}</p>
      <p>{props.email}</p>
      {props.onRemove && (
        <button type="button" className="card-delete" onClick={props.onRemove}>
          Remove
        </button>
      )}
    </div>
  );
}
export default TeamCard;
