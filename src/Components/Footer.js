import React from "react";
import "../css/Footer.css"; // Import a separate CSS file for styling
import { useNavigate } from "reacter-router-dom";


export default function Footer() {
  
    const navigate = useNavigate();
  
    function handleHomeClick() {
      navigate("/home");
    }
  
    function handleActivityClick() {
      navigate("/activity");
    }
  
    function handleAddClick() {
      navigate("/+");
    }
  
    function handleFlashClubClick() {
      navigate("/flashclub");
    }
  
    function handleProfileClick() {
      navigate("/profile");
    }
  
    return (
      <footer className="stylefooter">
        <nav>
          <ul className="navlist">
            <button onClick={(e) => handleHomeClick}>Home</button>
            <li className="navItem"> Home</li>
  
            <button onClick={(e) => handleActivityClick}>Activity</button>
            <li className="navItem"> Activity</li>
  
            <button onClick={(e) => handleAddClick}>+</button>
            <li className="navItem"> +</li>
  
            <button onClick={(e) => handleFlashClubClick}>Flash Club</button>
            <li className="navItem"> Flash Club</li>
  
            <button onClick={(e) => handleProfileClick}>Profile</button>
            <li className="navItem"> Profile</li>
          </ul>
        </nav>
      </footer>
    )}