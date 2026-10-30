import { useEffect, useState } from "react";


const Countcombine = () => {
    const [count,setCount]= useState<number>(0);

    useEffect(()=>{
        document.title =`Count: ${count}`;
    },[count]); //[count] tells that this effect depends on the current  count.

    const handle = ()=>{
        setCount((prev)=>prev + 1)
    }
  return (
    <div>
        <h2>Page Title Example</h2>
        <p>Count: {count}</p>
        <button onClick={handle}>Increase count</button>
    </div>
  )
}


export default Countcombine