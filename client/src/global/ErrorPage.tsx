import React from "react";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import errorPageImg from "../assets/error-page.svg";

const ErrorPage: React.FC = () => {
  const navigate = useNavigate();

  const handleReturn = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-l from-cyan to-slate-400 flex-col gap-2">
      <img className="h-72 w-72" src={errorPageImg} />
      <p className="text-xl">
        Hello there, looks like the page you're looking for doesn't exist.
      </p>
      <button
        onClick={handleReturn}
        className="appearance-none flex items-center gap-2"
      >
        <HiArrowNarrowLeft size={25} />
        Return
      </button>
    </div>
  );
};

export default ErrorPage;
