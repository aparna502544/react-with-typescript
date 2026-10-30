// import Header from "./Header"

const Home = () => {
  const studentName: string ="appu"
  const studentAge: number = 29

  return (
    <>  
    {/* <Header/>  */}
    <div>
      <h2 className="text-blue-500">student application</h2>
      <p className="text-amber-900 text-center">{studentName}</p>
    <p>{studentAge}</p>
    </div>
    </>
  )
}


//app and component
export default Home