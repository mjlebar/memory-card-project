function Sidebar(props) {
  return (
    <div className="sidebar">
      <p>Score: {props.score}</p>
      <p>Best Score: {props.bestScore}</p>
    </div>
  );
}

export { Sidebar };
