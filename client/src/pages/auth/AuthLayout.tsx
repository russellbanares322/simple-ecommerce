import React from "react";
import Login from "./Login";
import authBg from "../../assets/auth-page-bg.svg";
import CircleClipPath from "../../global/CircleClipPath";
import Signup from "./Signup";
import { useLocation } from "react-router-dom";

const AuthLayout: React.FC = () => {
  const location = useLocation();
  const isRouteForLogin = location.pathname === "/login";
  const isRouteForSignup = location.pathname === "/sign-up";

  return (
    <div className="min-h-screen flex">
      <div className="bg-cyan w-1/2 flex items-center justify-center p-3 relative overflow-hidden">
        <img className="h-[30rem] w-[30rem]" src={authBg} />
        <CircleClipPath
          topClassName="top-[-2rem]"
          rightClassName="right-[35rem]"
          bgClassName="bg-brown"
          heightClassName="h-[10rem]"
          widthClassName="w-[10rem]"
        />
        <CircleClipPath
          topClassName="top-[34rem]"
          rightClassName="right-[-1rem]"
          bgClassName="bg-brown"
          heightClassName="h-[10rem]"
          widthClassName="w-[10rem]"
        />
      </div>
      <div className="bg-white w-1/2 flex items-center md:mt-24 p-3 flex-col">
        {isRouteForLogin && <Login />}
        {isRouteForSignup && <Signup />}
      </div>
    </div>
  );
};

export default AuthLayout;
