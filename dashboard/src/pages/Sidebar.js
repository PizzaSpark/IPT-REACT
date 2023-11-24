import React from 'react'
import { Link } from 'react-router-dom'
import "./Sidebar.css"; 

function Sidebar() {
  return (
    <div className='main'>
      <div className="sidebar">
        <Link to='/loginmat'>
            <div className="sidebar-content">
                <h4>
                    <center>
                        Login
                    </center>
                </h4>
            </div>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar
