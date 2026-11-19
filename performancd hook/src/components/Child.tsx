import { memo } from "react";

interface childProps {
    onClick: () => void;
}

function Child({ onClick }: childProps) {
    console.log("Child rendered");

    return (
        <button onClick={onClick}>
            Child Button
        </button>
    );
}

export default memo(Child);