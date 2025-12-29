import { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  // const [username,setUsername]=useState('');
  // const [password,setPassword]=useState('');
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [loggedInUser, setLoggedInUser] = useState(null);
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (savedUser && isLoggedIn) {
      setLoggedInUser(savedUser.username);
    }
  }, []);

  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));
    const usernameg = storedUser?.username; //get kar rahe hai stored username from local storage agar storedUser null hua to error na de isiliye ? lagaya hai
    const passwordg = storedUser?.password;

    if (!usernameg || !passwordg) {
      alert("No user found. Please register first.");
      return;
    }

    if (form.username === usernameg && form.password === passwordg) {
      alert("Login Successful");
      localStorage.setItem("isLoggedIn", "true");
      navigate("/weather");
      setLoggedInUser(usernameg); // set logged in user
    } else {
      alert("Invalid Credentials");
    }
  }
  function logout() {
    localStorage.removeItem("isLoggedIn");
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
