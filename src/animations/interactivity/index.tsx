import { useState } from "react";
import animationData from "./animationData.json";
import Lottie, { InteractivityProps } from "lottie-react";

const interactivityData: Omit<InteractivityProps, "lottieObj"> = {
  mode: "scroll",
  actions: [
    {
      visibility: [0, 1],
      type: "seek",
      frames: [0, 300],
    },
  ],
};

export default function interactivity() {
  return (
    <Lottie animationData={animationData} interactivity={interactivityData} />
  );
}
