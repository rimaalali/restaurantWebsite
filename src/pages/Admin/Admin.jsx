import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Admin.css'
import photo from '../../assets/logo.png'
import { HiH3 } from "react-icons/hi2";
const Admin = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (password === "admin123") { 
      localStorage.setItem("admin", "true");
      navigate("/Dashbord");
    } else {
      alert('Nice Try🔥,Your Not The Manager');
     navigate("/");
    }
  };

  return (<div className="pg">
    
    <div className="password_cont">
      <h2 >Hi Manager </h2>
        <h3>inter your password</h3>
      <input
        type="password"
        placeholder=' password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="password"
      />
      <button onClick={handleLogin} className="inter">
        inter
      </button>
    </div></div>
  );
};

export default Admin;