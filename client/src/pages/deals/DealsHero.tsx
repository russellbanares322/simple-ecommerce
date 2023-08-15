import React from "react";
import heroImg from "../../assets/hero-img-1.png";

const DealsHero: React.FC = () => {
  return (
    <div className="py-7 bg-soft-pink px-[5rem] relative">
      <div className="py-[1rem]">
        <p className="font-semibold text-soft-green text-[2rem] w-96">
          Grab Upto 50% Off On Selected Headphone
        </p>
        <button className="button-filled-style mt-[1.75rem]">Buy Now</button>
      </div>
      <img
        className="absolute h-[16rem] bottom-0 right-36"
        src={heroImg}
        alt="deals_hero"
      />
    </div>
  );
};

export default DealsHero;
