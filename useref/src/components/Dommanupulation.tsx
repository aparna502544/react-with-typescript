import { useRef } from "react"

//input value changeyann veandii
const Dommanupulation = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleChange = ()=>{
        if (inputRef.current){
            inputRef.current.value ="heloo aparnaa";

        }
    };
    const handleClear = ()=>{
        if (inputRef.current){
            inputRef.current.value = "";
        }
    }
  return (
    <>
    <div>
    <h2>DOM MANUPULATION</h2>
    <input
    ref={inputRef}
    type="text"
    placeholder="ENTER YOUR NAME"
    />
    <br></br>
    <button onClick={handleChange}>chane input</button><br></br>
    <button onClick={handleClear}>clear</button>
    </div>
    </>
  )
}

export default Dommanupulation