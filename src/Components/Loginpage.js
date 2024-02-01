import React from 'react'
import './../Style/signinstyle.css'

function Loginpage() {
  return (
    <div className='body'>
      <nav className="navigation">
        <d4 className="navbartext">Campus Media</d4>
        <button className="navlogin">Sign In</button>
      </nav>
      <div className='body1'>
        <form action="" className='thisform'>
            <input className='inputag' type="text" placeholder='Email' />
            <input className='inputag' type="text" placeholder='Password' />
            <button className='sub inputag'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Loginpage
