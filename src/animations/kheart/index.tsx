import { useState } from "react";
import animationData from "./animationData.json";
import Lottie, { InteractivityProps } from "lottie-react";

// @ts-ignore
const interactivityData: Omit<InteractivityProps, "lottieObj"> = {
  mode: "scroll",
  actions: [
    {
      visibility: [0, 0.3],
      type: "seek",
      frames: [0, 1],
    },
    {
      visibility: [0.3, 1],
      type: "seek",
      frames: [1, 39],
    },
  ],
};

export default function interactivity() {
  return (
    <Lottie animationData={animationData} interactivity={interactivityData} />
  );
}
