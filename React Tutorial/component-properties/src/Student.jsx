import PropTypes from 'prop-types'
// Props are read-only properties that are shared between components. Where a parent component can send data to a child component.
// While using props you can send a component key value pairs that allows for multiple components with unique data
function Student(props) {
    return(
        <>
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p> {/* In this case we require the use of a ternary operator that says if the condition is true print "Yes" else print "No". Because booleans dont display to the DOM */}
            
        </div>
        </>
    );
}

// Prop types is a mechanism for debugging that ensure the passed value is of the correct datatype, if not sends a warning to the console
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
  }
  // Default Props supply a default value when a prop passed is empty
  
  Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
  }

export default Student