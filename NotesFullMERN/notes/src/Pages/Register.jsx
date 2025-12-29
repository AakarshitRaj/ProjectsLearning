import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false); // optional
  const navigate = useNavigate();

  async function handleRegister(e) {
    e.preventDefault();

    setLoading(true); // disable multiple clicks
    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Registration failed");
        setLoading(false);
        return;
      }

      // Registration succeeded
      alert("Registration Successful!");
      navigate("/login"); // redirect to login page
    } catch (err) {
      console.error("Error during registration:", err);
      alert("An error occurred during registration. Please try again later.");
    } finally {
      setLoading(false);
    }
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
