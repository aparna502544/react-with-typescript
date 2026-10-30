import { useState } from "react"

const Counter = () => {
    const [count,setCount] = useState<number>(0);
    // const updateCount = ()=>{
    //     setCount((previousCount)=> previousCount + 1);
    // };
    // const decreaseCount = ()=>{
    //     setCount((previousCount)=> previousCount - 1);
    // }
    // const resetCount = ()=>{
    //     setCount(0)
    // }
    const updateCount =()=>{
        setCount(count + 1);
    }
    const decreaseCount =()=>{
        setCount(count - 1);
    }
    const resetCount =()=>{
        setCount(0)
    }
  return (
    <>
    <div>Counter App</div>
    <h2>Count: {count}</h2>
    <button onClick={updateCount}>Increment</button>
    <button onClick={decreaseCount}>Decrement</button>
    <button onClick={resetCount}>Reset</button>
    </>
  )
}

export default Counter