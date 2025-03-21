import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    
    alert("✅ Registration successful! Please login.");
    navigate("/login"); 
  };

  return (
    <form onSubmit={handleRegister}>
      <h2>Register</h2>
      <input type="text" name="username" placeholder="Username" required onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" required onChange={handleChange} />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;