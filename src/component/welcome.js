import React,{useEffect} from 'react'
import Header from './header'
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate()
  useEffect (()=>{
    if(!localStorage.getItem('token')){
        navigate('/login')
    }
  },[])
  return (
    <div>
      <Header />
      <h2 style={{paddingLeft:'15px'}}>Welcom Page</h2>
    </div>
  )
}

export default Welcome