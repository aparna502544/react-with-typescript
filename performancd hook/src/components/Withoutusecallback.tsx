import { useState } from "react";
import Child from "./child";

const WithoutUseCallback = () => {
    const [count, setCount] = useState<number>(0);

    const handleClick = () => {
        console.log("Button clicked");
    };

    return (
        <div>
            <h2>Without useCallback</h2>

            <h3>Count: {count}</h3>

            <button onClick={() => setCount(count + 1)}>
                Increase
            </button>

            <Child onClick={handleClick} />
        </div>
    );
};

export default WithoutUseCallback;