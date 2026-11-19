import { useCallback, useState } from "react";
import Child from "./child";

const WithUseCallback = () => {
    const [count, setCount] = useState<number>(0);

    const handleClick = useCallback(() => {
        console.log("Button clicked");
    }, []);

    return (
        <div>
            <h2>With useCallback</h2>

            <h3>Count: {count}</h3>

            <button onClick={() => setCount(count + 1)}>
                Increase
            </button>

            <Child onClick={handleClick} />
        </div>
    );
};

export default WithUseCallback;