import React from 'react';
import "./Error.css";
import {Link} from "react-router-dom"

const Error = () => {
  return (
    <div className='error'>
      <h1>404</h1>
      <h1 className='error-status'>UH OH! YOU'RE LOST.</h1>
      <p className='error-msg'>The page you are looking for does not exit.How you get is a mystery.But you can click the button below togo back to homepage</p>
      <Link to='/'>
      <button className='error-btn'>Home</button>
      </Link>
    </div>
  )
}

export default Error;
