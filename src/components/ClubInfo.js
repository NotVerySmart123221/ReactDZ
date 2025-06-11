export function ClubInfo(props) {
  return (
    <div className="info">
      <h2>Название: {props.name}</h2>
      <p>Город: {props.city}</p>
      <p>Год основания: {props.founded}</p>
      <img src={props.logo} className="logo" />
    </div>
  );
}