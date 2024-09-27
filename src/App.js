import React from 'react'
import './css/App.css'
import { Routes, Route} from 'react-router-dom'
import home from './pages/home'


export default function App() {

  return (
    <div>

      <h1> Hi Welcome to Flash</h1>
      <h1> Create Community and Run it!</h1>

      <Routes>
        <Route path="/" element={<home />} />
        <Route path="/profile" element={<profile />} />
      </Routes>

      
      <a href='/' className='container'>Login </a>
    </div>
  );
}


