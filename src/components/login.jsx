import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulating successful login (no backend check)
    alert("✅ Login successful!");
    localStorage.setItem("user", JSON.stringify(form)); // Store session
    navigate("/profile"); // Redirect to profile page
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" required onChange={handleChange} />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;