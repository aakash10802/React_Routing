import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    } else {
      alert("⚠️ You must be logged in to view this page.");
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div>
      <h2>Welcome, {user?.email}!</h2>
      <button onClick={() => { localStorage.removeItem("user"); navigate("/login"); }}>
        Logout
      </button>
    </div>
  );
};

export default Profile;