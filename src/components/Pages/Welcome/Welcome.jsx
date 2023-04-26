import React, { useEffect } from "react";
import { gsap } from "gsap";
import "./Welcome.css";

const Welcome = () => {
  useEffect(() => {
    gsap.fromTo(
      ".welcome-page",
      {
        opacity: 1,
      },
      {
        opacity: 0,
        duration: 1.5,
        delay: 3,
      }
    );

    gsap.fromTo(
      ".welcome-page p",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 1.5,
      }
    );
  }, []);
  return (
    <div class="welcome-page">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
        <path d="M0 96C0 60.7 28.7 32 64 32h96c123.7 0 224 100.3 224 224s-100.3 224-224 224H64c-35.3 0-64-28.7-64-64V96zm160 0H64V416h96c88.4 0 160-71.6 160-160s-71.6-160-160-160z" />
      </svg>
      <div class="logo-container">
        <p>net</p>
      </div>
    </div>
  );
};

export default Welcome;
