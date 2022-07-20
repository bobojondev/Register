import React from 'react'

const Hero = ({handleLogout}) => {
  return (
    <div className='hero'>
        <nav>
            <h2>Welcom</h2>
            <button onClick={handleLogout}>Logout</button>
        </nav>
    </div>
  )
}

export default Hero