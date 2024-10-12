import React from 'react'
import Nav from '../components/Nav/Nav'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='grid sm:grid-col-12 grid-col-7 grid-flow-row'>
      <Nav/>
      <Outlet/>
    </div>
  )
}

export default Layout
