import { useEffect, useState } from "react";
import { getUsers, createUser } from "./api";

function App() {
  const [users, setUsers] = useState([]);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");

  const loadUsers = async () => {
    const res = await getUsers();
    setUsers(res.data);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createUser({ fname, lname, email });

    setFname("");
    setLname("");
    setEmail("");

    loadUsers();
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>KitchenVault Users</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="First Name"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
        />
        <input
          placeholder="Last Name"
          value={lname}
          onChange={(e) => setLname(e.target.value)}
        />
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Add User</button>
      </form>

      <h2>Users</h2>
      <ul>
        {users.map((u) => (
          <li key={u.id}>
            {u.fname} {u.lname} — {u.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
