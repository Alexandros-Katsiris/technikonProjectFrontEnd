import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
    <Link className='btn btn-primary' to={"/register"} >REGISTER</Link>
    </>
  )
}

export default Home;