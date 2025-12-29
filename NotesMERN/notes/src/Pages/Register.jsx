import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Register() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  function handleRegister(e) {
    e.preventDefault();
    // Registration logic can be added here
    const username = form.username;
    const email = form.email;
    const password = form.password;
    console.log("Registered with", username, email, password);

    const user = { email: email, username: username, password: password };
    localStorage.setItem("user", JSON.stringify(user));

    alert("Registration Successful");
    navigate("/login");
  }

  return (
    <div>
      <form onSubmit={handleRegister}>
        <h2>Register Page</h2>
        <input
          type="text"
          placeholder="Enter Username"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          required
        />
        <br />
        <br />
        <input
          type="email"
          placeholder="Enter Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />
        <br />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
