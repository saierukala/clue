// src/components/UserList.js

import React, { useState, useEffect } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <h1>{user.name}</h1>
            <p>{user.username}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
