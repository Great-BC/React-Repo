// Updater Function = A function passed as an argument to setState() usually ex. setYear(arrow function)
// It allows for safe updates based on the previous state 
// Used with multiple state updates and asynchronous functions

import React, {useState} from 'react';

function MyComponent() {
    const [count, setCount] = useState(0);

    const increment = () => {
        // the intention of this code is to increment the count variable two 
        //But instead of that it is increment by 1 because it uses the current count which is 0 twice before updating
        // Using an updater function makes it so that it uses the previous count and then increments it
        
        // setCount(count + 1);
        // setCount(count + 1);

        // We make use of a "c" (first letter of the variable) or "prevCount" to represent the previous count
        // Then using an arrow function to increment it
        setCount(c => c + 1);
        setCount(c => c + 1);
    }

    const decrement = () => {
        setCount(c => c - 1);
        setCount(c => c - 1);
    }

    const reset = () => {
        // The use of an updater function is not necessary here because it just sets the value to 0
        setCount(0);
    }

    return(
    <>
    <div className="counter-container">
        <p className="count-display">Count: {count}</p>
        <button className="counter-button" onClick={decrement}>Decrement</button>
        <button className="counter-button" onClick={reset}>Reset</button>
        <button className="counter-button" onClick={increment}>Increment</button>


    </div>
    </>
    );
}
export default MyComponent