import React from 'react'
import './css/App.css'
import Home from '/pages/Home'
import { BrowserRouter as Route, Routes, Link } from 'react-router-dom';




export default function App() {

  return (
    <div>

      

      <h1> Hi Welcome to Flash</h1>
      <h1> Create Community and Run it!</h1>
      <Link to='/home'> Login</Link>


      <Routes>
          {/* Home component is displayed when the /home path is visited */}
          <Route path="/home" element={<Home />} />
      </Routes>
      

      

    </div>
  );
}


