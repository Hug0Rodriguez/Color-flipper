import "./styles.css";
import { useState } from "react";
import getRandomColor from "./randomColor";

export default function App() {
  const [color, flipColor] = useState("#ffffff");

  return (
    <div
      style={{
        backgroundColor: color,
        minHeight: "100vh",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1>Color Flipper</h1>
      <button onClick={() => flipColor(getRandomColor())}>Flip Color</button>
      <p>current color: {color}</p>
    </div>
  );
}
