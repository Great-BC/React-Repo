// useEffect() = This tells react to do some code when a component re-renders, mounts(creates and appends to the DOM) or a value changes

//useEffect(function, [dependencies])

// useEffect(() => {}) // Runs after every re-render
// useEffect(() => {}, [value]) // Runs only on mount
// useEffect(() => [value]) // Runs on mount + when value changes

// Uses : DOM manipulation, event listeners, fetching data from an API, cleaning up after a component unmounts(When a component is taken out of the DOM)
import React, {useState, useEffect} from "react";

function MyComponent() {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");
    // Sets title to  count every time DOM re-renders
    // useEffect(() => {
    //     document.title = `Count: ${count}`;
    // })
    // Adding array of dependencies(an empty array) makes it run code when component is mounted(Which is once in this case)
    // useEffect(() => {
    //          document.title = `My Counter Program`;
    //      }, [])
    // Adding a value to the array of dependencies(value to the array) makes it run the code whenever component is mounted and the value changes
    useEffect(() => {
        document.title = `Count: ${count} ${color}`;
    }, [count, color])
    function addCount() {
        setCount(c => c + 1);
    }
    function changeColor() {
        setColor(c => c === "green" ? "red" : "green");
    }
    return(
    <>
    <p style={{color: color}}>Count: {count}</p>
    <button onClick={addCount}>Add</button>
    <button onClick={changeColor}>Change Color</button>
    </>
    );
}
export default MyComponent;