import React from "react";
import heroImg from "../../../assets/hero-img.png";

const Hero: React.FC = () => {
  return (
    <div className="page-padding-y page-padding-x bg-hero-bg bg-cover bg-center relative overflow-hidden">
      <div className="my-14 lg:my-28">
        <p className="font-semibold text-soft-green text-[2rem] w-[20rem] lg:text-[2.7rem] lg:w-[30rem]">
          Shopping And Department Store.
        </p>
        <p className="my-5 lg:my-10 w-[20rem] lg:w-[25rem] text-sm lg:text-[1rem]">
          Shopping is a bit of relaxing hobby for me, which is sometimes
          troubling for the bank balance.
        </p>
        <button className="button-filled-style">Learn More</button>
      </div>
      <img
        className="object-cover bg-center absolute md:top-24 right-16 md:h-[24rem] hidden md:block"
        src={heroImg}
      />
    </div>
  );
};
export default Hero;
