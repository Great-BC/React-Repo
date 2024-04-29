import React, {useState} from "react";

function MyComponent2() {

    const [person, setPerson] = useState([]);
    const [personName, setName] = useState("");
    const [personAge, setAge] = useState();
    const [personPhoneNumber, setPhoneNumber] = useState();
    const [personAddress, setAddress] = useState();
    var personCount = 0;
    function addPerson() {
        
        const newPerson = {
            name: personName,
            age: personAge,
            phoneNumber: personPhoneNumber,
            address: personAddress,
        };

        setPerson(p => [...p, newPerson]);    
    }

    function removePerson(index) {

        setPerson(p => p.filter((_, i) => i !== index));

    }

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleAgeChange(event) {
        setAge(event.target.value);
    }

    function handlePhoneNumberChange(event) {
        setPhoneNumber(event.target.value);
    }

    function handleAddressChange(event) {
        setAddress(event.target.value);
    }


    return(
        <>
        <div>
            <h1>People On Record</h1>

            <ul>
                {person.map((person, index) => <li key={index} onClick={ () => removePerson(index)}>Person {personCount += 1}<br/>Name: {person.name}<br/>Age: {person.age}<br/>Phone Number: {person.phoneNumber}<br/>Address: {person.address}</li>)}
            </ul>

            <label>Enter Name</label>
            <input type="text" onChange={handleNameChange} placeholder="John Doe"/>
            <label>Enter Age</label>
            <input type="number" onChange={handleAgeChange} placeholder="30"/>
            <label>Enter Phone Number</label>
            <input type="tel" onChange={handlePhoneNumberChange} placeholder="1234567890"/>
            <label>Enter Address</label>
            <input type="text" onChange={handleAddressChange} placeholder="123 Howard Avenue"/>
            <button onClick={addPerson}>Add Person</button>
        </div>
        </>
    );
}
export default MyComponent2;