import React from "react";
import { useNavigate } from "react-router-dom";

const Signup: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigateToLoginPage = () => {
    navigate("/login");
  };

  return (
    <div className="w-96 p-3 pt-20 md:pt-0">
      <p className="text-3xl">Sign up</p>
      <p className="text-md mt-1">
        Already have an account?{" "}
        <span
          onClick={handleNavigateToLoginPage}
          className="text-soft-green underline cursor-pointer"
        >
          Log in
        </span>
      </p>
      <form className="flex flex-col mt-5">
        <label className="text-sm font-medium" htmlFor="email">
          Email Address
        </label>
        <input name="email" className="input-style" type="text" />
        <label className="text-sm font-medium" htmlFor="username">
          Username
        </label>
        <input name="username" className="input-style mb-3" type="text" />
        <label className="text-sm font-medium" htmlFor="confirm-password">
          Confirm Password
        </label>
        <input
          name="confirm-password"
          className="input-style"
          type="Password"
        />
        <label className="text-sm font-medium" htmlFor="password">
          Password
        </label>
        <input name="password" className="input-style" type="Password" />
        <button className="button-flat-filled-style mt-3">SIGNUP</button>
      </form>
    </div>
  );
};

export default Signup;
