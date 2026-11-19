// useRef for Persistent Values
// We can store values inside a ref, and those values remain available between component renders.

import { useRef, useState } from "react"

// import { useRef } from "react"

// What is a persistent value?
// A persistent value is a value that remains stored even when a component re-renders.

// For example:
// - Store the number of button clicks.
// - Store previous values.


const Persistent = () => {
//     const countRef = useRef<number>(0);
//     const handleClick =()=>{
//         countRef.current++;   //increase the value stored inside the ref
//         console.log("count:", countRef.current);
        
//     };   
//   return (
//     <>
//     <div>
//     <h2>USEREF COUNTER </h2>
//     <h3>Check the Browser console</h3>
//     <button onClick={handleClick}>Increase Count</button>
//     <p>The display UI does not change becoz updating useRef doesc not trigger a 
//         rerender . if you want to update count to appear on the screen use usestate.
//     </p>

//     </div>
//     </>
//   )
//
    const [stateCount,setStateCount] = useState<number>(0);
    const refCount = useRef<number>(0);

    const handleState = ()=>{
        setStateCount(stateCount + 1)
    };

    const handleRef = ()=>{
        refCount.current++;
        console.log("ref count:" , refCount.current);
        
    }

    return(
        <>
    <h2>usestate vs useref</h2>
    <h3>state count:{stateCount}</h3>
    <button onClick={handleState}>increase state</button>
    <br></br>
    <button onClick={handleRef}>increase ref</button>
        </>
    )
     }

export default Persistent