import { Link, Outlet } from "react-router-dom"


const DashboardNested= () => {
  return (
    <>
    <div>
        <h1>ADMIN DASHBOARD</h1>
        <nav>
            <Link to="/dashboard">HOME</Link> |
            <Link to="/dashboard/profile">PROFILE</Link> |
            <Link to="/dashboard/users">USERS</Link> |
            <Link to="/dashboard/settings">SETTINGS</Link> |  
        </nav>
        <hr/>
        <Outlet/>
    </div>
    </>
  )
}

export default DashboardNested