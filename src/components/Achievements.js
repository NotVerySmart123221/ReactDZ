export function Achievements(props) {
  return (
    <div className="achievements">
      <h2>Достижения</h2>
      <ul>
        {props.list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
