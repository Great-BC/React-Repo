import React, {useState} from "react";

function MyComponent() {
    const [foods, setFoods] = useState(["Apple", "Orange"]);
    function handleAddFoods(){
        const newFood = document.getElementById("foodInput").value;

        document.getElementById("foodInput").value ="";
        // Make use of an updater function
        setFoods(f => [...f, newFood]);
    }
    function handleRemoveFoods(index){
        // Using an underscore is a naming convention for ignored parameters
        setFoods(foods.filter((_, i) => i !== index));
    }
    return(
        
        
        <>
        <div>
            <h2>List of Foods</h2>
            <ul>
                {foods.map((food, index) => <li key={index} onClick={() => handleRemoveFoods(index)}>{food}</li>)}
            </ul>
            <input type="text" id="foodInput" placeholder="Enter Food Name"/>
            <button onClick={handleAddFoods}>Add Food</button>
        </div>
        </>
    );
}

export default MyComponent;