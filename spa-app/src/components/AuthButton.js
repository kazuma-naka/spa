import React from "react";
import { useAuth } from "../auth/useAuth.js";

const AuthButton = () => {
  const { isLoggedIn, login, logout } = useAuth();
  return (
    <button onClick={isLoggedIn ? logout : login}>
      {isLoggedIn ? "ログアウト" : "ログイン"}
    </button>
  );
};

export default AuthButton;
