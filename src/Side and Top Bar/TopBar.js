import React from 'react'
import './Bars.css'
import { Link } from 'react-router-dom';

const TopBar = () => {
  return (
    <>
      <div className='topbar'>
        <Link to='/' className='logout'>Logout</Link>
      </div>
    </>
  );
}

export default TopBar