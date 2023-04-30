import React from 'react'
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate= useNavigate()
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };
  return (
    <div className='d-flex justify-content-between bg-dark align-items-center pt-2 pb-2'>
      <div className='col-4 pl-1'>
        <h5 className='mb-0' style={{color:'#ffff',paddingLeft:'15px'}}>Company Logo</h5>
      </div>
      <div className='col-1 text-center'>
          <button className='btn btn-sm btn-primary' onClick={handleLogout}>Logout</button>
      </div>
    </div>
  )
}

export default Header