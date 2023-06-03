import { useState } from "react";
import * as Animations from "./animations";
import "./styles.css";

export default function App() {
  const [selectedAnimation, useSelectedAnimation] = useState("Example");
  const Animation = Animations[selectedAnimation];
  return (
    <div className="App">
      <h1>Hello, je suis Olivia</h1>

      <select
        value={selectedAnimation}
        onChange={(e) => useSelectedAnimation(e.target.value)}
      >
        {Object.keys(Animations).map((a, i) => (
          <option key={i} value={a}>
            {a}
          </option>
        ))}
      </select>
      <Animation />
    </div>
  );
}
