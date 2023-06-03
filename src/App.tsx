import { useState } from "react";
import * as animations from "./animations";
import Lottie from "lottie-react";
import "./styles.css";

export default function App() {
  const [selectedAnimation, useSelectedAnimation] = useState(
    Object.keys(animations)[0]
  );
  return (
    <div className="App">
      <h1>My lovely animations</h1>
      <select
        value={selectedAnimation}
        onChange={(e) => useSelectedAnimation(e.target.value)}
      >
        {Object.keys(animations).map((a, i) => (
          <option key={i} value={a}>
            {a}
          </option>
        ))}
      </select>
      <div style={{ width: "70vw", margin: "0 auto" }}>
        <Lottie animationData={animations[selectedAnimation]} loop={true} />
      </div>
    </div>
  );
}
