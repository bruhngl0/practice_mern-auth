import React from 'react'
import{Link} from 'react-router-dom'

const Header = () => {
  return (
    
    <div className='header-main'>
    <div>
      <h4>
        <Link to = '/' >GoalGetter</Link>
      </h4>
    </div>

    <div>
        <Link to = "/register">
            Register
        </Link>
    </div>

    <div>
        <Link to = "/login">
            Login
        </Link>
    </div>
    </div>
   
  )
}

export default Header
