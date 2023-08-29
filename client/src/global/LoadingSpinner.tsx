import React from "react";
import logo from "../assets/logo.png";

const LoadingSpinner: React.FC = () => {
  return (
    <>
      <div className="fixed bg-black/70 h-screen w-full left-0 top-0 z-30" />
      <div className="fixed z-50 left-0 top-0 bottom-0 right-0 translate-y-1/2 translate-x-1/2">
        <div className="z-50 h-20 w-20 rounded-full flex items-center justify-center relative overflow-hidden">
          <div className="rounded-full z-50 bg-white h-16 w-16" />
          <div className="bg-green h-20 w-20 rounded-full z-10 after:rotate-12 after:rounded-full absolute top-0 left-0 after:bg-white after:h-5 after:p-5 after:w-24 after:absolute after:-top-1 after:left-8 animate-spin" />
          <img
            className="absolute top-0 mt-5 object-cover z-50 h-10 w-10 animate-pulse"
            src={logo}
            alt="Logo"
          />
        </div>
      </div>
    </>
  );
};

export default LoadingSpinner;
