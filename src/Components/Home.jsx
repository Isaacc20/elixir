import React, { useState } from 'react'
import Topnav from './Topnav'
import About from './About'
import Sidenav from './Sidenav'
import Display from './Display'

const Home = () => {
  const [navbarBg, setnavbarBg] = useState('#21294E')
  
  return (
    <>
        <div>
          <Topnav />
          <About />
          <div className='d-flex align-item-start'>
            <Sidenav />
            <Display />
          </div>
        </div>
    </>
  )
}

export default Home