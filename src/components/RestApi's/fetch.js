import React, { useEffect, useState } from "react";

function UserDetails() {
  const [userId, setUserId] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const fetchUserDetails = async () => {
    if (!userId) {
      setError("Please Enter userId");
      return;
    }

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/comments/${userId}`
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
      setError("Error not found please enter a valid user Id");
    }
  };

  useEffect(() => {
    if (submitted) {
      fetchUserDetails();
    }
  }, [userId, submitted]);

  const handleUser = (e) => {
    setUserId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <h1>Fetch User Details</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter User ID:
          <input type="text" value={userId} onChange={handleUser}></input>
        </label>
        <button type="submit">Submit</button>
      </form>
      {submitted && (
        <>
          {error && <p style={{ color: "red" }}>{error}</p>}
          {user && (
            <div>
              <h1> UserDetails</h1>
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default UserDetails;
