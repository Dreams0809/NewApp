import React from "react";
import '../css/Signin.css';
import { Link } from 'react-router-dom'




export default function Login(){
    return(
       
    <div className="login-box">
        <h2>Sign-Up</h2>

        
       
        <form action="/signup" method="POST">

          <h3 className="label">User Name:</h3>
          <input type="text" name="userName" placeholder="User Name" required />

          <h3>Email:</h3>
          <input type="email" name="email" placeholder="Email" required />

          <h3>Password:</h3>
          <input
          //   type={passwordVisible ? 'text' : 'password'}
          name="password"
          placeholder="Password"
          required
          />

          <h3> Name</h3>
          <input
          //   type={passwordVisible ? 'text' : 'password'}
          name="Name"
          placeholder="Name"
          required
          />

          <h3> Area Code</h3>
          <input
          //   type={passwordVisible ? 'text' : 'password'}
          name="Area Code"
          placeholder="Area Code"
          required
          />
          {/* <i className="fas fa-eye" onClick={() => togglePasswordVisibility(setPasswordVisible)}></i> */}

      
          {/* <i className="fas fa-eye" onClick={() => togglePasswordVisibility(setConfirmPasswordVisible)}></i> */}

          <input
          type="submit"
          id="submit"
          style={{ height: '50px', width: '150px', paddingLeft: '10px' }}
          />
          <Link to="/home" style={{textDecoration: 'none'}}>
            <button>To login page</button>
          </Link>
        </form>  

    </div>
    )
}