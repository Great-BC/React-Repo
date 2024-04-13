function Button() {
    return(
        <button className="button">Click Me</button>
    );
// The three ways to style components in react are Inline, External and module
/* Inline:
This involves declaring a const and assigning the css properties to it
Ex:
const styles = {
    // Make sure to use camel case for the property names, with a comma after each property
    backgroundColor: "white",
    color: "white",
    padding: "20px",

}

return(
    //This involves setting the style attribute to the const declared with the css properties
        <button style={styles}>Click Me</button>
    );

*/
}

export default Button