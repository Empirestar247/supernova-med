import React, { useState } from "react";
import axios from "axios";

function PasswordReset() {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/password-reset-request", {
        email,
      });
      alert("Password reset email sent");
    } catch (error) {
      console.error("Error during password reset request", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        placeholder="Email"
        onChange={handleChange}
      />
      <button type="submit">Reset Password</button>
    </form>
  );
}

export default PasswordReset;
