import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../api/authenticationApi";
import inputWarningMessage from "./inputWarningMessage";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isFormDirty, setIsFormDirty] = useState<boolean>(false);
  const handleFormDataChange = (e: React.FormEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    setFormData({ ...formData, [name]: value });
  };

  const handleNavigateToSignupPage = () => {
    navigate("/sign-up");
  };

  const handleValidateInputs = () => {
    if (!formData.email || !formData.password) {
      return setIsFormDirty(true);
    }
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleValidateInputs();
    signIn(formData.email, formData.password)
      .then(() => {
        navigate("/");
        toast.success("Successfully logged in!");
      })
      .catch(() => toast.error("Failed to login, please try again."));
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
        <label className="text-sm font-medium mt-4" htmlFor="password">
          Password
        </label>
        <input
          onChange={handleFormDataChange}
          value={formData.password}
          name="password"
          className="input-style"
          type="Password"
        />
        {isFormDirty && !formData.password && inputWarningMessage("Password")}
        <button type="submit" className="button-flat-filled-style mt-3">
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default Login;
