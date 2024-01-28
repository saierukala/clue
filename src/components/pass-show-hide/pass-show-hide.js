import React, { useState } from "react";

function ShowHidePassword() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <label>
        Password:
        <input
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? "Hide" : "Show"} Password
      </button>
    </div>
  );
}

export default ShowHidePassword;
