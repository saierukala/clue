import React, { useState, useEffect } from "react";

function Post() {
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
  });
  const [error, setError] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isSubmitted) {
      // Make a POST request to create a new user
      fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          console.log("New user created:", data);
          // Handle successful response, e.g., show a success message
        })
        .catch((err) => {
          setError(err.message);
        });
    }
  }, [isSubmitted, newUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div>
      {error && <p>Error: {error}</p>}
      <h1>Create User</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          />
        </div>
        <button type="submit">Create User</button>
      </form>
    </div>
  );
}

export default Post;
