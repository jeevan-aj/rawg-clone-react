import React from 'react'
import { Link, Outlet } from 'react-router-dom'



function UserPage() {
  return (
   <div className="row">
    <div className="col">
        <Link to={'user1'}>jeevan</Link>
        <Link to={'user2'}>pum</Link>
     
    </div>
    <div className="col">
        <Outlet/>
    </div>
   </div>
  )
}

export default UserPage