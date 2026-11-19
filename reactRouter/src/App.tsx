// import { Route, Routes } from "react-router-dom"
// import ProductDtails from "./components/ProductDtails"

import { Route, Routes } from "react-router-dom"
import DashboardNested from "./components/Nestedroute"
import NestDashboardHome from "./components/NestDashboardHome"
import NestedProfile from "./components/NestedProfile"
import NestedUsers from "./components/NestedUsers"
import NestedSettings from "./components/NestedSettings"

// import { About } from "./components/About"
// import { Contact } from "./components/Contact"
// import Home from "./components/Home"
// import Navbar from "./components/Navbar"
// import Login from "./components/Login"
// import Dashboard from "./components/Dashboard"
// import StudentDetails from "./components/StudentDetails"




const App = () => {
  return (
    <>
{/*        
    <Navbar/>
  <Routes>
    <Route path="/products/:id"
    element = {<ProductDtails/>}/>
    <Route path="/students/:id"
    element = {<StudentDetails/>}/>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/dashboard" element={<Dashboard/>} />   
  </Routes> */}

  <Routes>
    <Route
    path="/dashboard"
    element= {<DashboardNested/>}>
    <Route index element={<NestDashboardHome/>}/>
    <Route path="profile" element={<NestedProfile/>}/>
    <Route path="users" element={<NestedUsers/>}/>
    <Route path="settings" element={<NestedSettings/>}/>
    </Route>
  </Routes>
    </>
    
  )
}

export default App