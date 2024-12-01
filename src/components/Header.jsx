import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between shadow-md rounded-md p-3 items-center'>
        <img src='/logo.svg' alt='logoimg'/>
        <button className="btn btn-neutral">Sign in</button>
    </div>
  )
}

export default Header