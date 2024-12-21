import React from "react";
import "./App.css"; // Import the CSS file for styles

function App() {
  return (
    <div className="app">
      <div className="login-container">
        <h1>Login</h1>
        <form className="login-form">
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" placeholder="Enter your password" />
          </div>
          <div className="button-group">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
