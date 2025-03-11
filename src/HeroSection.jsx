import React, { useEffect, useState } from "react";
import "./herosection.css";

const HeroSection = () => {
  const text =
    "Precision-driven detailing, estimation, and engineering services for construction excellence.";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, 50);

      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return (
    <div className="hero">
      <div className="overlay"></div>
      <div className="hero-content">
        <h1>Welcome to WhiteBoard Technologies Pvt Ltd</h1>
        <p className="typewriter">{displayedText}</p>
      </div>
    </div>
  );
};

export default HeroSection;
