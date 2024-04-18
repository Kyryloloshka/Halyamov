import React from 'react'

const NavBar = () => {
  return (
    <div className='bg-transparrent'>
      <div className='flex justify-between items-center p-5'>
        <div className='text-2xl font-bold'>Logo</div>
        <div className='flex space-x-5'>
          <div>About</div>
          <div>Portfolio</div>
          <div>Contact</div>
        </div>
      </div>
    </div>
  )
}

export default NavBar