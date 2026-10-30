interface StudentProps{
  name: string;
  age: number
}

const Student = ({name , age}:StudentProps) => {
  return (
    <div>
      <h2>Name: {name} </h2>
      <h3>age: {age}</h3>
    </div>
  )
}

export default Student