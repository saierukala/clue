import React, { useEffect, useState } from "react";

export default function UserDetails() {
  const [userId, setUserId] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (submitted) {
      const fetchUserDetails = async () => {
        if (!userId) {
          setError("Please Enter User Id");
          return;
        }
        try {
          const response = await fetch(
            `https://jsonplaceholder.typicode.com/users/${userId}`
          );
          if (!response.ok) {
            throw new Error("User Not Found");
          }
          const userData = await response.json();
          setUser(userData);
          setError(null);
        } catch (error) {
          console.log(error);
          setUser(null);
          setError("User not found, please enter a valid user Id");
        }
      };
      fetchUserDetails();
    }
  }, [submitted, userId]);

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
          Enter User Id:
          <input type="text" value={userId} onChange={handleUser} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {submitted && (
        <>
          {error && <p style={{ color: "red" }}>{error}</p>}
          {user && (
            <div>
              <h1>User Details</h1>
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
              <p>Phone: {user.phone}</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}
