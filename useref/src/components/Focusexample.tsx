import { useRef } from "react"

const Focusexample = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const handleFocus = ()=>{
        inputRef.current?.focus();
    };
  return (
    <>
    <div>
    <h2>FOCUS EXAMPLE</h2>
    <input
    ref={inputRef}
    type="text"
    placeholder="ENTER YOUR NAME"
    />
    <button onClick={handleFocus}>FOCUS INPUT</button>
    </div>
    </>
  )
}

export default Focusexample