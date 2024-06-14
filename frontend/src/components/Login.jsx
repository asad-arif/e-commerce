import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = localStorage.getItem("user");

  const navigate = useNavigate();

  useEffect(() => {
    if (auth) {
      navigate("/");
    }
  });

  const handleSubmit = async (e) => {
    console.log(email, password);
    e.preventDefault();
    const res = await fetch("http://localhost:4000/login", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await res?.json();
    if (data?.email) {
      navigate("/");
      localStorage.setItem("user", JSON.stringify(data));
    }
  };

  return (
    <div className="login">
      <h1>Login up Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
