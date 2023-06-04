import { useState } from "react";
import * as Animations from "./animations";
import Lottie from "lottie-react";
import "./styles.css";

export default function App() {
  const [selectedAnimation, useSelectedAnimation] = useState(
    Object.keys(Animations)[0]
  );
  const AnimationComponent = Animations[selectedAnimation];

  return (
    <div className="App">
      <AnimationComponent />
      <div style={{ position: "fixed", bottom: 0, margin: "0 0 20px" }}>
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
      </div>
    </div>
  );
}
