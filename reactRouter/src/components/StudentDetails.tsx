import { useParams } from "react-router-dom"

const StudentDetails = () => {
    const { id } = useParams<{id:string}>();
    const students = [
        {id:1, name:"aparna", course:"python"},
        {id:2, name:"ayana", course:"react"},
        {id:3, name:"shelha", course:"django"},
    ];
    const student = students.find(
        (item)=> item.id === Number(id)
    );
    if (!student){
        return <h2>student not found</h2>
    }
  return (
    <>
    <h1>STUDENT DETAILS</h1>
    <p>ID: {student.id}</p>
    <p>NAME: {student.name}</p>
    <p>COURSE: {student.course}</p>
    </>
  )
}

export default StudentDetails