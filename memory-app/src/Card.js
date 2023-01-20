function Card(props) {
  return (
    <p onClick={props.onClick} className="Card">
      {props.name}
    </p>
  );
}

export { Card };
