import React from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigateToSignupPage = () => {
    navigate("/sign-up");
  };

  return (
    <div className="w-96 p-3 pt-20 md:pt-0">
      <p className="text-3xl">Login</p>
      <p className="text-md mt-1">
        Doesn't have an account yet?{" "}
        <span
          onClick={handleNavigateToSignupPage}
          className="text-soft-green underline cursor-pointer"
        >
          Sign up
        </span>
      </p>
      <form className="flex flex-col mt-5">
        <label className="text-sm font-medium" htmlFor="email">
          Email Address
        </label>
        <input name="email" className="input-style mb-3" type="text" />
        <label className="text-sm font-medium" htmlFor="password">
          Password
        </label>
        <input name="password" className="input-style" type="Password" />
        <button className="button-flat-filled-style mt-3">LOGIN</button>
      </form>
    </div>
  );
};

export default Login;
