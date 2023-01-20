import "./style.css";
import { Card } from "./Card";
import { Sidebar } from "./Sidebar";
import { useState } from "react";

function App() {
  const [entries, setEntries] = useState([
    { name: "Fly By Night", clicked: false, index: 1 },
    { name: "2112", clicked: false, index: 3 },
    { name: "Hemispheres", clicked: false, index: 5 },
    { name: "Moving Pictures", clicked: false, index: 7 },
    { name: "Clockwork Angels", clicked: false, index: 19 },
    { name: "Counterparts", clicked: false, index: 14 },
    { name: "Permanent Waves", clicked: false, index: 6 },
    { name: "Rush", clicked: false, index: 0 },
    { name: "Signals", clicked: false, index: 8 },
    { name: "Roll the Bones", clicked: false, index: 13 },
    { name: "A Farewell to Kings", clicked: false, index: 4 },
    { name: "Grace Under Pressure", clicked: false, index: 9 },
    { name: "Test for Echo", clicked: false, index: 15 },
    { name: "Presto", clicked: false, index: 12 },
    { name: "Snakes and Arrows", clicked: false, index: 18 },
    { name: "Caress of Steel", clicked: false, index: 2 },
    { name: "Hold Your Fire", clicked: false, index: 11 },
    { name: "Feedback", clicked: false, index: 17 },
    { name: "Vapor Trails", clicked: false, index: 16 },
    { name: "Power Windows", clicked: false, index: 10 },
  ]);
  // initializes the array of albums, including information about whether the ablum has been clicked yet and what order it comes in the albums (this is not reflected in the game grid - it's just so we can retrieve the correct cover)

  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const checkAlbum = (e) => {
    for (let i = 0; i < entries.length; i++) {
      if (entries[i].name === e.target.parentNode.id) {
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
      // go through the entries until we find the one matching. If we've already clicked it, reset the game. Otherwise, increment the score and best score, and mark the album as clicked.
    }
    setEntries(shuffleArray(entries));
    // resets the game grid
  };
  // this is passed as a click listener to the gameboard cards

  function resetClicked() {
    for (let i = 0; i < entries.length; i++) {
      entries[i].clicked = false;
    }
  }
  // helper function, resets the game by making all entries unclicked

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };
  // helper function to shuffle the array, taken from https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj#:~:text=The%20first%20and%20simplest%20way,)%20%3D%3E%200.5%20%2D%20Math.

  return (
    <div className="App">
      <header className="title">Rush Album Memory Game</header>
      <Sidebar score={score} bestScore={bestScore}></Sidebar>
      <div className="card-grid">
        {entries.map((entry, index) => {
          return (
            <Card
              key={index}
              name={entry.name}
              onClick={checkAlbum}
              index={entry.index}
            ></Card>
          );
        })}
      </div>
    </div>
  );
}

export default App;
