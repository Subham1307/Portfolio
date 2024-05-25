import React from 'react'
import logo from "../assets/kevinRushLogo.png"
import { FaLinkedin, FaGithub, FaTwitterSquare, FaInstagram } from 'react-icons/fa'

function Navbar() {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            {/* <img className='mx-2 w-10'  src={logo} alt='Logo'/> */}
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href="https://www.linkedin.com/in/subham-dey-125094225" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://github.com/null-Character7" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="https://www.instagram.com/iamsubham._" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
      <a href="https://x.com/AsliJethalal_69" target="_blank" rel="noopener noreferrer">
        <FaTwitterSquare />
      </a>
        </div>
    </nav>
  )
}

export default Navbar