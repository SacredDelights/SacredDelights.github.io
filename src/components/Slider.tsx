import React from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Slider = () => {
  const images = [
    "https://raw.githubusercontent.com/SacredDelights/SacredDelights.github.io/refs/heads/main/src/images/slide2.webp",
    "https://raw.githubusercontent.com/SacredDelights/SacredDelights.github.io/refs/heads/main/src/images/slide3.webp",
    "https://raw.githubusercontent.com/SacredDelights/SacredDelights.github.io/refs/heads/main/src/images/slide4.webp",
    "https://raw.githubusercontent.com/SacredDelights/SacredDelights.github.io/refs/heads/main/src/images/slide5.webp",
  ];

  return (
    <Zoom scale={1.4} indicators={false}>
      {images.map((each, index) => (
        <div key={index} style={{ width: "100%" }}>
          <img
            style={{ objectFit: "contain", width: "100%" }}
            alt="Slide Image"
            src={each}
          />
        </div>
      ))}
    </Zoom>
  );
};

export default Slider;
