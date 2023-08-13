import React from "react";
import CreditCard from "../../../assets/CreditCard";

const Hero: React.FC = () => {
  return (
    <div className="p-4 max-w-[1640px] bg-hero-bg bg-cover bg-center relative overflow-hidden">
      <div className="my-14 md:my-28">
        <p className="font-semibold text-soft-green text-[2rem] w-[20rem] md:text-[4rem] md:w-[30rem]">
          Shopping And Department Store.
        </p>
        <p className="my-5 md:my-5 w-[20rem] md:w-[27rem] text-md md:text-[1.1rem]">
          Shopping is a bit of relaxing hobby for me, which is sometimes
          troubling for the bank balance.
        </p>
        <button className="button-filled-style">Learn More</button>
      </div>
      <CreditCard />
    </div>
  );
};
export default Hero;
