import React from 'react'
import { Outlet } from 'react-router-dom'

const Home:React.FC = () => {
  return (
    <div>
      hello i m from home
      <Outlet/>
      </div>
  )
}

export default Home