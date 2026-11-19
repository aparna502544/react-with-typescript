

import { useState } from "react";
import Child from "./child";

const Parent = () => {
    const [count, setCount] = useState<number>(0);
    const handleClick = () => {
        console.log("Button clicked");
    };
    return (
        <div>
            <h2>Count :{count}</h2>
            <button onClick={() => setCount(count + 1)}>
                Increase
            </button>
            <Child onClick = {handleClick}/>
        </div>
    )
}

export default Parent;