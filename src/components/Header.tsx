import React from 'react'
import logo from '../assets/img/logo.png'

const Header = () => {
  return (
    <header className='bg-[#422ED4] mb-[60px]'>
        <div className='w-[1240px] mx-auto'>
            <img src={logo} alt="Chuck Norris" />
        </div>
    </header>
  )
}

export default Header