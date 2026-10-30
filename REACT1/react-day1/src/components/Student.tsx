
interface Studentprops {
    id:number
    name:string,
    age:number,
    course:string,
    city?:string
}
const Student = ({id,name,age,course,city}:Studentprops) => { 
 
  return (
    <>
    <div>
      <h1>Id: {id}</h1>
        <h1>Name: {name}</h1>
        <h2>Age: {age}</h2>
        <h3>Course: {course}</h3>
        <h4>City: {city?? "not provided"}</h4>
    </div>
  
    </>
  )
}

export default Student