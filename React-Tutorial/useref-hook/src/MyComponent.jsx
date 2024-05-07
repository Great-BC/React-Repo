// useRef() = Similar to the useState Hook but differs in the sense that it does not cause re-renders unlike the useState Hook
// "Use Reference" is used when you want a component to "remember" some information without triggering new renders

// Uses: Accessing/Interacting with DOM elements, Handling Focus, Animations and Transitions, Managing Timers and intervals

import React, {useState, useEffect, useRef} from "react";

function MyComponent() {
    // let [number, setNumber] = useState(0);
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    useEffect(() => {
        
    })
    function handleClick1() {
        // setNumber(n => n + 1)
        // ref.current++;
        // console.log(ref.current);
        inputRef1.current.focus();
    }
    function handleClick2() {
        
        inputRef2.current.focus();
    }
    function handleClick3() {
        
        inputRef3.current.focus();
    }
    return(
        <>
        <div>
           <button onClick={handleClick1}>Click Me 1!</button>
           {/* Sets the built-in ref property to the variable with the useRef Hook which gives access to the input element using the ref */}
           <input ref={inputRef1}/>

           <button onClick={handleClick2}>Click Me 2!</button>
           <input ref={inputRef2}/>

           <button onClick={handleClick3}>Click Me 3!</button>
           <input ref={inputRef3}/>
        </div>
        
        </>
    );
}
export default MyComponent;