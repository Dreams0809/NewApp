import React from 'react'
import './css/App.css'
import {BrowserRouter as Router, Route, Routes, BrowserRouter} from 'react-router-dom'
import Homescreen from './pages/Homescreen'


export default function App() {

  return (
    <div>

      <BrowserRouter>
        <Routes>
          { <Route index element={Homescreen} /> }
          { <Route path='/Homescreen' element={<Homescreen />} /> }
        </Routes>
      </BrowserRouter>



      <h1> Hi Welcome to Flash</h1>
      <h1> Create Community and Run it!</h1>


      <a href='/Homescreen' className='container'> 
      <BrowserRouter>
        <Routes>
          {/* { <Route index element={Homescreen} /> } */}
          { <Route path='/Homescreen' element={<Homescreen />} /> }
        </Routes>
      </BrowserRouter>

      Sign</a>
      
      <a href='/' className='container'>Login </a>
    </div>
  );
}


