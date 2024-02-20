// src/EmailForm.js
import React, { useState } from "react";
import "../../lib/emailForm.css";
const EmailFormComponent = ({ onSubmit }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //Todo: Send email to backend(database) or local storage
    console.log("Email submitted:", email);
    setEmail("");
    onSubmit();
  };

  return (
    <div className="container">
      <div className="header">
        <h1>LindoGourmet</h1>
        <p className="text">Product Customization</p>
        <p className="text">software for Business</p>
      </div>
      <div className="email-form">
        <form onSubmit={handleSubmit}>
          <label>
            <input
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default EmailFormComponent;
