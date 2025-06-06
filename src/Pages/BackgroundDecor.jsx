import React from "react";
import bgImage from "../assets/webp/bgImg.webp";
import EllipseRight from "../assets/webp/EllipseRight.webp";

const BackgroundDecor = () => {
  return (
    <>
      <img
        src={bgImage}
        alt="Background"
        className="fixed bottom-0 left-0 w-full z-[-1] h-[120%]"
      />
      <img
        src={EllipseRight}
        alt="Top Right"
        className="fixed top-0 right-[-20px] m-2 md:m-4 w-20 md:w-28 h-auto z-0"
      />
      <img
        src={EllipseRight}
        alt="Top Left"
        className="fixed top-10 md:top-0 left-0 m-2 md:m-4 w-20 md:w-28 h-auto z-0 rotate-[270deg]"
      />
      <img
        src={EllipseRight}
        alt="Bottom Left"
        className="fixed top-20 left-[-10px] m-2 md:m-4 w-20 md:w-28 h-auto z-0 rotate-[180deg]"
      />
    </>
  );
};

export default BackgroundDecor;
