import React, { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: "", email: "" });
  const [editedUser, setEditedUser] = useState({
    id: null,
    name: "",
    email: ""
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchUsers();
  }, []);

  const handleCreateUser = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newUser)
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setUsers([...users, data]);
      setNewUser({ name: "", email: "" });
    } catch (err) {
      setError(err.message);
    }
  };

  const handleEditUser = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${editedUser.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(editedUser) // Use the editedUser state here
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      const updatedUsers = users.map((user) =>
        user.id === data.id ? data : user
      );
      setUsers(updatedUsers);
      setEditedUser({ id: null, name: "", email: "" }); // Reset editedUser after successful update
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`,
        {
          method: "DELETE"
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const filteredUsers = users.filter((user) => user.id !== id);
      setUsers(filteredUsers);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      {error && <p>Error: {error}</p>}
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
            <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
            <button
              onClick={() =>
                setEditedUser({
                  id: user.id,
                  name: user.name,
                  email: user.email
                })
              }
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
      <h2>Create User</h2>
      <input
        type="text"
        placeholder="Name"
        value={newUser.name}
        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Email"
        value={newUser.email}
        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
      />
      <button onClick={handleCreateUser}>Create</button>
      {editedUser.id && (
        <div>
          <h2>Edit User</h2>
          <input
            type="text"
            placeholder="Name"
            value={editedUser.name}
            onChange={(e) =>
              setEditedUser({ ...editedUser, name: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Email"
            value={editedUser.email}
            onChange={(e) =>
              setEditedUser({ ...editedUser, email: e.target.value })
            }
          />
          <button onClick={handleEditUser}>Save</button>
        </div>
      )}
    </div>
  );
}

export default App;
