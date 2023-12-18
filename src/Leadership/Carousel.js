import React, { useEffect, useState } from "react";
import data from "../data";
import "./Carousel.css";

const Carousel = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handlePrevious = () => {
    // console.log('previous' , activeImageIndex - 1)
    setActiveImageIndex(
      !activeImageIndex ? data.length - 1 : activeImageIndex - 1
    );
    // setActiveImageIndex(activeImageIndex - 1)
  };

  const handleNext = () => {
    console.log("next", activeImageIndex + 1);
    setActiveImageIndex((activeImageIndex + 1) % data.length);
    // setActiveImageIndex(activeImageIndex + 1)
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNext();
    }, 5000);
    return () => clearTimeout(timer);
  }, [activeImageIndex]);

  return (
    <div className="wallpaper">
      <h2
        className={
          "previous-button " //+
        //   (activeImageIndex === 0 ? "p-btn-visibility" : "")
        }
        onClick={handlePrevious}
      >
        {"<"}
      </h2>
      {data.map((url, index) => (
        <img
          key={index}
          src={url}
          alt="Wallpaper"
          className={activeImageIndex === index ? "block" : "hidden"}
        />
      ))}
      <h2
        className={
          "next-button " //+
        //   (activeImageIndex === data.length - 1 ? "n-btn-visibility" : "")
        }
        onClick={handleNext}
      >
        {">"}
      </h2>
    </div>
  );
};

export default Carousel;
