function Sidebar(props) {
  return (
    <div className="sidebar">
      <h4>
        Get points by clicking the Rush album covers! If you click the same
        cover twice, you lose the game and the score resets. Good luck!
      </h4>
      <p>Score: {props.score}</p>
      <p>Best Score: {props.bestScore}</p>
    </div>
  );
}

export { Sidebar };
