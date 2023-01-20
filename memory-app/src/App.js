import "./style.css";
import { Card } from "./Card";
import { Sidebar } from "./Sidebar";
import { useState } from "react";

function App() {
  const [entries, setEntries] = useState([
    { name: "Fly By Night", clicked: false },
    { name: "2112", clicked: false },
    { name: "Hemispheres", clicked: false },
    { name: "Moving Pictures", clicked: false },
    { name: "Clockwork Angels", clicked: false },
    { name: "Counterparts", clicked: false },
    { name: "Permanent Waves", clicked: false },
    { name: "Rush", clicked: false },
    { name: "Signals", clicked: false },
    { name: "Roll the Bones", clicked: false },
    { name: "A Farewell to Kings", clicked: false },
    { name: "Grace Under Pressure", clicked: false },
    { name: "Test for Echo", clicked: false },
    { name: "Presto", clicked: false },
    { name: "Snakes and Arrows", clicked: false },
    { name: "Caress of Steel", clicked: false },
    { name: "Hold Your Fire", clicked: false },
    { name: "Feedback", clicked: false },
  ]);

  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const checkAlbum = (e) => {
    for (let i = 0; i < entries.length; i++) {
      if (entries[i].name === e.target.textContent) {
        if (entries[i].clicked) {
          setScore(0);
          resetClicked();
        } else {
          entries[i].clicked = true;
          if (score + 1 > bestScore) {
            setBestScore(score + 1);
          }
          setScore(score + 1);
        }
      }
    }
    setEntries(shuffleArray(entries));
  };

  function resetClicked() {
    for (let i = 0; i < entries.length; i++) {
      entries[i].clicked = false;
    }
  }

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  return (
    <div className="App">
      <header className="title">Rush Album Memory Game</header>
      <Sidebar score={score} bestScore={bestScore}></Sidebar>
      <div className="card-grid">
        {entries.map((entry, index) => {
          return (
            <Card key={index} name={entry.name} onClick={checkAlbum}></Card>
          );
        })}
      </div>
    </div>
  );
}

export default App;
