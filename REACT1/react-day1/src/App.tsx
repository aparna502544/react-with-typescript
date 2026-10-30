import Home  from "./components/Home"
import Student from "./components/Student"

  interface StudentType{
    id:number,
    name:string,
    age:number,
    course:string
  }
const App=() => {   //const studentarr =({id,name,age,course}: studentprops)
   let studentData: StudentType[] = [
    {
      id: 101,
      name: "appu",
      age: 27,
      course: "Bba"

    },
    {
      id: 102,
      name: "anu",
      age: 22,
      course: "Btech"

    },
    {
      id: 103,
      name: "abin",
      age: 25,
      course: "Bcom"
    }
   ]

 return (
    <>
    <div>
      <Home/>

      {/* <Student name = "aparna" age = {29} course = "BBA" city = "kozhikode"/>
      <Student name = "abitha" age = {25} course = "CS"/>
      <Student name = "drishya" age = {27} course = "BCOM"/>
      <h1>student management system</h1>
      <p>student managgement application for students</p> */}

<h1>STUDENT LIST</h1>

  {studentData.map((item) => (
    <Student
      key={item.id}
      id={item.id}
      name={item.name}
      age={item.age}
      course={item.course}
    />
  ))}

      </div>
    </>
  )
}

export default App
