// Used object destructuring to extract individual variables or functions from libraries
import React, {useState} from 'react';

function MyComponent() {
// Setting an initial state of guest
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        // Set name function rerenders the virtual DOM to update the name value
        setName("Great");
    }

    const incrementAge = () => {
        setAge(age + 1);
    }

    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed);
    }
    return(
        <>
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>
        </div>

        <div>
            <p>Age: {age}</p>
            <button onClick={incrementAge}>Set Age</button>
        </div>

        <div>
            <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggleEmployedStatus}>Toggle Status</button>
        </div>
        </>
    );
}
export default MyComponent