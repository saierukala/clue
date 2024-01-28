import React, { useState, useEffect } from "react";

function UserDetails() {
  const [userId, setUserId] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      if (!userId) {
        setError("Please Enter userId");
        return;
      }

      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );

        if (!response.ok) {
          throw new Error("User not found");
        }

        const userData = await response.json();
        setUser(userData);
        setError(null);
      } catch (error) {
        console.error(error);
        setUser(null);
        setError("Error: User not found. Please enter a valid user ID.");
      }
    };

    fetchUserDetails();
  }, [userId]); // Trigger the effect when userId changes

  const handleUser = (e) => {
    setUserId(e.target.value);
  };

  const handleButtonClick = () => {
    fetchUserDetails();
  };

  return (
    <div>
      <h1>Fetch User Details</h1>
      <form>
        <label>
          Enter User ID:
          <input type="text" value={userId} onChange={handleUser} />
        </label>
        <button type="button" onClick={handleButtonClick}>
          Fetch User
        </button>
      </form>
      {user && (
        <div>
          <h1>User Details</h1>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default UserDetails;
