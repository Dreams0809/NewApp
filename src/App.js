import React from 'react'
import './css/App.css'
// import Footer from './Components/Footer'
import Home from './pages/Home'
// import Create from './pages/Create'
// import Profile from './pages/Profile'
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom'
import Signin from './Components/Signin'





export default function App() {
  return (
    <div>
      <h1> Hi Welcome to Flash</h1>
      <h1> Create Community and Run it!</h1>
      
      
        <Routes>
            {/* Home component is displayed when the /home path is visited *  */}
            <Route path="/home" element={<Home />}/>

            {/* Add more routes here */}
            <Route path='/Signin' element={<Signin />}/>
        </Routes>

          <Link to="/Signin" style={{textDecoration: 'none'}}>
            <button>To login page</button>
          </Link>
      

    </div>
  );
}