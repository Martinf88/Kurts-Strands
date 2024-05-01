import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../css/login-page.css";

export default function Loginpage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "admin" && password === "password") {
      setLoggedIn(true);
      navigate("/admin"); // Omdirigera till '/admin' vid lyckad inloggning
    } else {
      setError("Fel användarnamn eller lösenord.");
    }
  };

  return (
    <div className="login-page">
      <NavLink to="/" className="login-link">
        Hem
      </NavLink>
      <div className="login-container">
        <h3>Logga in</h3>
        <div className="login-form">
          <div className="login-input">
            <input
              type="text"
              placeholder="Användarnamn"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="login-input">
            <input
              type="password"
              placeholder="Lösenord"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="btn-wrapper">
            <button
              type="button"
              className="login-button"
              onClick={handleLogin}
            >
              Logga in
            </button>
            {error && <p className="login-error-message">{error}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
