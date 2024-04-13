function Button() {
    // Arrow function with in function (If you have more than 1 line of code youll have to use curly braces)
    // let count = 0;
    // const handleClick = (name) => {
    //     if(count < 3) {
    //         count ++;
    //         count > 0 && count < 2 ? console.log(`${name} you clicked me ${count} time`) : 
    //         console.log(`${name} you clicked me ${count} times`)
            
    //     }
    //     else {
    //         console.log(`${name} Stop Clicking me`);
    //     }
    // };
    // Exploring the functionality of the default parameter: SyntheticBaseEvent "(event/e)""
    const handleClick = (e) => e.target.textContent = "OUCH!";
    const handleClick2 = (name) => console.log(`${name} Stop Clicking me`);
    //If you add a set of parenthesis after a function youll call it right away So We have to use an arrow function when calling the handleClick2 Function to prevent that from happening
    // return(<button onClick={() => handleClick2("Great")}>Click Me</button>)
    // return(<button onClick={() => handleClick("Great")}>Click Me</button>)
    return(<button onClick={ handleClick}>Click Me</button>)
}
export default Button