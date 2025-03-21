import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Home = () => {
  return (
    <Router>
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h1>Welcome to Our Website</h1>
        <p>Please register or log in to access your profile.</p>
      </div>
      <nav>
        <Link to="/register" >Register</Link>
      </nav>
    </Router>
  );
};

export default Home;