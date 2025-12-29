import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";
export default function Login() {
  // const [username,setUsername]=useState('');
  // const [password,setPassword]=useState('');
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");

    if (token && username) {
      setLoggedInUser(username);
    }
  }, []);

  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      //send the login request to server
      const res = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      //read the response data from server
      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Login failed");
        return;
      }

      localStorage.setItem("username", data.username);
      localStorage.setItem("token", data.token);

      setLoggedInUser(data.username);
      navigate("/weather");
    } catch (err) {
      console.error("Error during login:", err);
      alert("An error occurred during login. Please try again later.");
    }
  }
  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setLoggedInUser(null);
    navigate("/login");
  }

  if (loggedInUser) {
    return (
      <div>
        <h2>You are logged in as {loggedInUser}</h2>
      </div>
    );
  }
  return (
    <div>
      <form onSubmit={handleLogin}>
        <h2>Login Page</h2>
        <input
          type="text"
          placeholder="Enter Username"
          required
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          required
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <br />
        <br />
        <button type="submit">Login</button>
        <p>
          Don't have account? <Link to="/register">Sign Up</Link>
        </p>
      </form>
    </div>
  );
}
