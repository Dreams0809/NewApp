import React from "react";
import useNavigate  from "reacter-router-dom";
import { faHouse, faPlus, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../css/Footer.css"; // Import a separate CSS file for styling


export default function Footer() {
  const navigate = useNavigate();

  return (
    <div className="footer">
      {/* Home Icon */}
      <div className="footer-icon" onClick={() => navigate('/home')}>
        <FontAwesomeIcon icon={faHouse} size="2x" />
        <p>Home</p>
      </div>

      {/* Plus Icon */}
      <div className="footer-icon" onClick={() => navigate('/create')}>
        <FontAwesomeIcon icon={faPlus} size="2x" />
        <p>Add</p>
      </div>

      {/* Profile Icon */}
      <div className="footer-icon" onClick={() => navigate('/profile')}>
        <FontAwesomeIcon icon={faUser} size="2x" />
        <p>Profile</p>
      </div>
    </div>
  );
}