import React from "react";
import useAuthentication from "../../hooks/useAuthentication";

const Account: React.FC = () => {
  const { email, username } = useAuthentication();

  return (
    <div className="flex items-center justify-center min-h-1/2 h-screen">
      <h1>{username}</h1>
      <h1>{email}</h1>
    </div>
  );
};

export default Account;
