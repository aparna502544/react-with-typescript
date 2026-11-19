import { useNavigate } from "react-router-dom"


const Login = () => {
    const navigate = useNavigate();
    const handleLogin = () =>{
        alert ("Login Successfully");
        navigate("/dashboard")
    };
  return (
    <>
    <h1>Login Page</h1>
    <button onClick={handleLogin}>Login</button>
    </>
    
  )
}

export default Login