import cover0 from "./images/cover0.jpeg";
import cover1 from "./images/cover1.jpeg";
import cover2 from "./images/cover2.jpeg";
import cover3 from "./images/cover3.jpeg";
import cover4 from "./images/cover4.jpeg";
import cover5 from "./images/cover5.jpeg";
import cover6 from "./images/cover6.jpeg";
import cover7 from "./images/cover7.jpeg";
import cover8 from "./images/cover8.jpeg";
import cover9 from "./images/cover9.jpeg";
import cover10 from "./images/cover10.jpeg";
import cover11 from "./images/cover11.jpeg";
import cover12 from "./images/cover12.jpeg";
import cover13 from "./images/cover13.jpeg";
import cover14 from "./images/cover14.jpeg";
import cover15 from "./images/cover15.jpeg";
import cover16 from "./images/cover16.jpeg";
import cover17 from "./images/cover17.jpeg";
import cover18 from "./images/cover18.jpeg";
import cover19 from "./images/cover19.jpeg";

const covers = {
  cover0,
  cover1,
  cover2,
  cover3,
  cover4,
  cover5,
  cover6,
  cover7,
  cover8,
  cover9,
  cover10,
  cover11,
  cover12,
  cover13,
  cover14,
  cover15,
  cover16,
  cover17,
  cover18,
  cover19,
};

function Card(props) {
  const cover = covers[`cover${props.index}`];
  return (
    <div className="Card" id={props.name} onClick={props.onClick}>
      <img src={cover} alt={`${props.name} album cover`} />
      <p>{props.name}</p>
    </div>
  );
}

export { Card };
