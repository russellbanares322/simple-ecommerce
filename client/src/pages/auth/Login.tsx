import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { login } from "../../api/authenticationApi";
import inputWarningMessage from "./inputWarningMessage";
import { HiOutlineEyeOff, HiOutlineEye } from "react-icons/hi";
import { TLoginFormDataTypes } from "./types";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<TLoginFormDataTypes>({
    email: "testaccount21@gmail.com",
    password: "testaccount21",
  });
  const [isFormDirty, setIsFormDirty] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const isFormInputsEmpty = !formData.email || !formData.password;

  const handleFormDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNavigateToSignupPage = () => {
    navigate("/sign-up");
  };

  const handleValidateInputs = () => {
    if (isFormInputsEmpty) {
      return setIsFormDirty(true);
    }
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleValidateInputs();
    setIsLoading(true);
    if (!isFormInputsEmpty) {
      login(formData.email, formData.password)
        .then(() => {
          window.location.reload();
          window.location.replace("/");
          toast.success("Successfully logged in!");
          setIsLoading(false);
          setFormData({
            email: "",
            password: "",
          });
        })
        .catch(() => {
          toast.error("Failed to login, please try again.");
          setIsLoading(false);
        });
    }
  };

  const handleTogglePasswordDisplay = () => {
    setShowPassword(!showPassword);
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
      <form onSubmit={onSubmit} className="flex flex-col mt-5">
        <label className="text-sm font-medium" htmlFor="email">
          Email Address
        </label>
        <input
          onChange={handleFormDataChange}
          value={formData.email}
          name="email"
          className="input-style"
          type="text"
        />
        {isFormDirty && !formData.email && inputWarningMessage("Email Address")}
        <label className="text-sm font-medium" htmlFor="password">
          Password
        </label>
        <div className="relative">
          <input
            onChange={handleFormDataChange}
            value={formData.password}
            name="password"
            className="input-style w-full"
            type={showPassword ? "text" : "password"}
          />
          {formData.password.length > 0 && showPassword && (
            <HiOutlineEye
              onClick={handleTogglePasswordDisplay}
              className="absolute top-4 right-2 cursor-pointer"
              title="Show Password"
              size={21}
            />
          )}
          {formData.password.length > 0 && !showPassword && (
            <HiOutlineEyeOff
              className="absolute top-4 right-2 cursor-pointer"
              onClick={handleTogglePasswordDisplay}
              title="Hide Password"
              size={21}
            />
          )}
        </div>
        {isFormDirty && !formData.password && inputWarningMessage("Password")}
        <button
          disabled={isLoading}
          type="submit"
          className="button-flat-filled-style mt-3 disabled:bg-soft-green/60"
        >
          {isLoading ? "LOGGING IN..." : "LOGIN"}
        </button>
      </form>
    </div>
  );
};

export default Login;
