import React from 'react'
import './css/App.css'
// import Footer from './Components/Footer'
import Home from './pages/Home'
// import Create from './pages/Create'
// import Profile from './pages/Profile'
import {Routes, Route, Link} from 'react-router-dom';




export default function App() {
  return (
    <div>
      <h1> Hi Welcome to Flash</h1>
      <h1> Create Community and Run it!</h1>
      
      
         <Routes>
              Home component is displayed when the /home path is visited * 
              <Route path="./pages/home" Component={<Home />}/>
          </Routes>

        <Link>
          <button> </button>
        </Link>
      

    </div>
  );
}