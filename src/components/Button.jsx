"use client"

import { useState } from "react";

export function Button() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }
    
    return (
        <button className="button1" onClick={handleClick}>
            This is a button. It has been clicked {count} times.
        </button>
    );
}

export function ButtonGrid({row, col}) {
    
    const array = [];

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            array.push(<Button/>);
        }
        array.push(<div className="array-row"></div>);
    }

    return(
        array
    );
}