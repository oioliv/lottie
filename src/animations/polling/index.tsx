import { useState } from "react";
import animationData from "./animationData.json";
import Lottie, { InteractivityProps } from "lottie-react";

const interactivityData: Omit<InteractivityProps, "lottieObj"> = {
  mode: "scroll",
  actions: [
    {
      visibility: [0, 0.3],
      type: "stop",
      frames: [1],
    },
    {
      visibility: [0.3, 1],
      type: "seek",
      frames: [2, 300],
    },
  ],
};

export default function Polling() {
  return (
    <Lottie animationData={animationData} interactivity={interactivityData} />
  );
}
