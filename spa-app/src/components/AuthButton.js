import React from "react";
import { useAuth } from "../hooks/AuthProvider.js";

const AuthButton = () => {
  const { isLoggedIn, login, logout } = useAuth();
  return (
    <button className="auth-button" onClick={isLoggedIn ? logout : login}>
      {isLoggedIn ? "ログアウト" : "ログイン"}
    </button>
  );
};

export default AuthButton;
