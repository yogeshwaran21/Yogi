import React from 'react'
import '../App.css';
import logo from '../logo.jpg'
import { Link } from 'react-router-dom';

export default function Home() {
  
  return (
    <div>
      <div>
    <div className="box">
      <img src={logo} className="logo" width="70" height="85" alt='Background'/>
    </div>
    <div className="line">
      <h1>TRAVEL THE<br />BEST POSSIBLE<br />TRIP...</h1><br /><br /><br /><br /><br />
      <div>
        <button type="button">
          <Link to='/CustomerDetails'><h2>BOOK TICKET</h2></Link>
          
        </button>
      </div>
    </div>
    </div>
    </div>
  )
}