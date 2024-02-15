
import { Link, Outlet } from 'react-router-dom'
import Layout from './Layout'


function UserPage() {
  return (
   <div className="row">
    <div className="col">
        <Link to={'user1'}>jeevan</Link>
        <Link to={'user2'}>pum</Link>
        <Layout/>
    </div>
    <div className="col">
        <Outlet/>
    </div>
   </div>
  )
}

export default UserPage