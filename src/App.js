import React from 'react'
import './css/App.css'
import Footer from './Components/Footer'
import Home from './pages/Home'
import Create from './pages/Create'
import Profile from './pages/Profile'
import { BrowserRouter as Routes, Route, } from 'react-router-dom';




export default function App() {

  return (
    <div>
      <h1> Hi Welcome to Flash</h1>
      <h1> Create Community and Run it!</h1>

      {/* Your main app content */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      {/* Footer placed at the bottom */}
      <Footer />
    </div>
      );
}



      {/* // <Router>  
      //   <Routes>
      //        Home component is displayed when the /home path is visited *
      //       <Route path="/home" element={<Home />} 
      //       <Link to='/pages/Home'> Login</Link>
      //   </Routes>
      // </Router>  */}