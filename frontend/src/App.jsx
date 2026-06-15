import { useEffect, useState } from "react";
import { getUsers, createUser, deleteUser } from "./api/userService";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");

  // GET users
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await getUsers();
      setUsers(res.data);
    } catch (err) {
      console.error("Error fetching users:", err);
    } finally {
      setLoading(false);
    }
  };

  // CREATE user
  const handleAddUser = async () => {
    if (!fname || !lname || !email) return;

    try {
      await createUser({ fname, lname, email });

      setFname("");
      setLname("");
      setEmail("");

      fetchUsers();
    } catch (err) {
      console.error("Error creating user:", err);
    }
  };

  // DELETE user
  const handleDeleteUser = async (id) => {
    try {
      await deleteUser(id);
      fetchUsers();
    } catch (err) {
      console.error("Error deleting user:", err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-6">KitchenVault Users</h1>

        {/* ADD USER */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          <input
            className="border p-2 rounded"
            placeholder="First name"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
          />

          <input
            className="border p-2 rounded"
            placeholder="Last name"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
          />

          <input
            className="border p-2 rounded"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button
          onClick={handleAddUser}
          className="mb-6 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Add User
        </button>

        {/* REFRESH */}
        <div className="mb-4">
          <button
            onClick={fetchUsers}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            {loading ? "Loading..." : "Refresh Users"}
          </button>
        </div>

        {/* USER LIST */}
        <div className="space-y-2">
          {users.length === 0 && !loading && (
            <p className="text-gray-500">No users found</p>
          )}

          {users.map((user) => (
            <div
              key={user.id}
              className="flex justify-between items-center p-3 border rounded bg-gray-50"
            >
              <div>
                <p className="font-medium">
                  {user.fname} {user.lname}
                </p>
                <p className="text-sm text-gray-600">{user.email}</p>
              </div>

              <button
                onClick={() => handleDeleteUser(user.id)}
                className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
