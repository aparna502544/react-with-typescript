import Context from "./components/context/Context";
import Dashboard from "./components/Dashboard"
import Profile from "./components/Profile";


function App() {
  // const username:string ="apz"
  return (
    <>
{/*   
    <div>
<h1>PROP DRILLING</h1>
<Dashboard username={username}/>
    </div> */}
    <Context.Provider value="demo">
      <Dashboard/>
      <Profile/>

    </Context.Provider>
    <Dashboard/>
      </>
  )
}

export default App;