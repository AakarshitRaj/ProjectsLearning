import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";

export default function Weather() {
  const navigate = useNavigate();
  function logout() {
    localStorage.removeItem("token");
    navigate("/login");
   return  <Layout logout={logout} />;
  }

  return (
    <div>
      Hello Weather Page
      <br></br>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
