import { Menu , MessageCircle } from "lucide-react"
import "./Navbar.css"
const Navbar = () => {
  return (
    <>
    <nav className="bar">
        <div className="logo">
            <span className="menu"><Menu /></span>
            <span className="logo-box">L</span>
            <h3>LuminaOS</h3>
        </div>
        <div className="nav-right">
            <span className="student">STUDENT</span>
            <span className="message"><MessageCircle /></span>
            <span className="profile">👨‍💼</span>
            
        </div>
    </nav>

    </>
  )
};

export default Navbar