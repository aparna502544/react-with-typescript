import Card from "./components/Card"
import Header from "./components/Header"
import Panel from "./components/Panel"
import Student from "./components/Student"
import Welcome from "./components/Welcome"

const App =()=>{
  return (
    <>
    <div>
    <h2>REACT COMPONENT COMPOSITION / COMPONENT NESTING</h2>
    <Header />
    <Welcome />

    <h3>PROPS IN REACT</h3>
    <Student name = "appu" age = {29}/>
    </div>

    <div>
      <h1>CHILDREN PROPS</h1>
      <Card>
        <h2>welcome</h2>
        <p>learn react with typescript</p>
      </Card>
      <Card>
        <h2>about us</h2>
        <p>we learn web development</p>
      </Card>
    </div>

    <div>
      <Panel title = "STUDENT DETAILS">
        <p>NAME: Aparna</p>
        <p>COURSE: React</p>
        <p>AGE: 27</p>
        <p>CITY: Calicut</p>
      </Panel>

    </div>
    </>
  )
}

export default App