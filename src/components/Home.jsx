import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Register from "./register";
import Login from "./login";
import Profile from "./profile";
const Home = () => {
  return (
    <Router>
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h1>Welcome to Our Website</h1>
        <p>Please register or log in to access your profile.</p>
      </div>
      <nav>
        <Link to="/register"style={{ margin: "10px", textDecoration: "none", fontSize: "18px" }}>Register</Link>
        <Link to="/login" style={{ margin: "10px", textDecoration: "none", fontSize: "18px" }}>Login</Link>
        <Link to="/profile"style={{ margin: "10px", textDecoration: "none", fontSize: "18px" }}>Profile</Link>
      </nav>
      <Routes>
        
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default Home;