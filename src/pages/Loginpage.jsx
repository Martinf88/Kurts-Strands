import React from "react";
import { NavLink } from "react-router-dom";
import "../css/login-page.css";
export default function Loginpage() {
  const handleLogin = () => {
    console.log("Loggade in");
  };
  return (
    <div className="login-page">
      <NavLink to="/">Back</NavLink>
      <div className="login-wrapper">
        <h1 className="login-title">Logga in</h1>
        <div className="user-wrapper">
          <label>Användarnamn</label>
          <input type="text" />
        </div>
        <div className="password-wrapper">
          <label>Lösenord</label>
          <input type="text" />
        </div>
        <NavLink to="/edit">
          <button onClick={handleLogin} className="login-btn btn">
            Logga in
          </button>
        </NavLink>
      </div>
    </div>
  );
}
