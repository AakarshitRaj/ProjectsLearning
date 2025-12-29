import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function Layout({ logout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (logout) logout(); // call the passed logout function
    navigate("/home");    // redirect to home after logout
  };

  return (
    <div>
      <nav
        style={{
          margin: "10px",
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          borderRadius: "5px",
          backgroundColor: "lightgray",
          padding: "10px",
        }}
      >
        <Link
          style={{
            padding: "10px 20px",
            backgroundColor: "lightblue",
            borderRadius: "5px",
            textDecoration: "none",
            color: "black",
          }}
          to="/home"
        >
          Home
        </Link>{" "}
        |{" "}
        <Link
          style={{
            padding: "10px 20px",
            backgroundColor: "lightblue",
            borderRadius: "5px",
            textDecoration: "none",
            color: "black",
          }}
          to="/notes"
        >
          Notes
        </Link>{" "}
        |{" "}
        <Link
          style={{
            padding: "10px 20px",
            backgroundColor: "lightblue",
            borderRadius: "5px",
            textDecoration: "none",
            color: "black",
          }}
          to="/login"
        >
          Login
        </Link>{" "}
        |{" "}
        <Link
          style={{
            padding: "10px 20px",
            backgroundColor: "lightblue",
            borderRadius: "5px",
            textDecoration: "none",
            color: "black",
          }}
          to="/dashboard"
        >
          Dashboard
        </Link>
      </nav>

      <Outlet />
<aside>  <button onClick={handleLogout}>Logout</button></aside>     
    </div>
  );
}
