// import Profile from "./Profile"
// interface Dashboardprops{
//     username:string,
// }

import { useContext } from "react"
import Context from "./context/Context"

// const Dashboard = ({username}:{username: string}) => {
//   return (
//     <>
//     <h2>Dashboard Component</h2>
//     <Profile username={username}/>
//     </>
//   )
// }

// export default Dashboard

//context

const Dashboard = () => {
    const user= useContext(Context);
  return (
    <>
    <h2>Dashboard</h2>
    <h3>WELCOME to {user}</h3>
    </>
  )
}

export default Dashboard


