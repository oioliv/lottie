import { useState } from "react";
import animationData from "./animationData.json";
import Lottie from "lottie-react";

export default function Hamster() {
  return <Lottie animationData={animationData} />;
}
