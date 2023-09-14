import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import inputWarningMessage from "./inputWarningMessage";
import { TSignUpFormDataTypes } from "./types";
import { register } from "../../api/authenticationApi";
import { HiOutlineEyeOff, HiOutlineEye } from "react-icons/hi";
import toast from "react-hot-toast";

const Signup: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<TSignUpFormDataTypes>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isFormDirty, setIsFormDirty] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const isFormInputsEmpty =
    !formData.username ||
    !formData.email ||
    !formData.password ||
    !formData.confirmPassword ||
    formData.confirmPassword !== formData.password;

  const passwordsMismatch =
    formData.confirmPassword &&
    formData.password &&
    formData.confirmPassword !== formData.password;

  const handleNavigateToLoginPage = () => {
    navigate("/login");
  };

  const handleFormDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleValidateInputs = () => {
    if (isFormInputsEmpty) {
      return setIsFormDirty(true);
    }
  };

  const handleTogglePasswordDisplay = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleValidateInputs();
    setIsLoading(true);
    if (!isFormInputsEmpty) {
      register(formData.username, formData.email, formData.password)
        .then(() => {
          navigate("/login");
          toast.success(
            "Successfully created account, please login to continue."
          );
          setIsLoading(false);
        })
        .catch(() => {
          toast.error("Failed to create account, please try again.");
          setIsLoading(false);
        });
    }
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
      <form onSubmit={onSubmit} className="flex flex-col mt-5">
        <label className="text-sm font-medium" htmlFor="email">
          Email Address
        </label>
        <input
          value={formData.email}
          onChange={handleFormDataChange}
          name="email"
          className="input-style"
          type="text"
        />
        {isFormDirty && !formData.email && inputWarningMessage("Email Address")}
        <label className="text-sm font-medium" htmlFor="username">
          Username
        </label>
        <input
          value={formData.username}
          onChange={handleFormDataChange}
          name="username"
          className="input-style"
          type="text"
        />
        {isFormDirty && !formData.username && inputWarningMessage("Username")}
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
        <label className="text-sm font-medium" htmlFor="confirm-password">
          Confirm Password
        </label>
        <input
          value={formData.confirmPassword}
          onChange={handleFormDataChange}
          name="confirmPassword"
          className="input-style"
          type={showPassword ? "text" : "password"}
        />
        {passwordsMismatch && (
          <p className="text-red-600 my-1 text-xs">Passwords doesn't match</p>
        )}
        {isFormDirty &&
          !formData.confirmPassword &&
          inputWarningMessage("Confirm Password")}

        <button
          disabled={isLoading}
          type="submit"
          className="button-flat-filled-style mt-3"
        >
          {isLoading ? "SIGNING UP..." : "SIGNUP"}
        </button>
      </form>
    </div>
  );
};

export default Signup;
