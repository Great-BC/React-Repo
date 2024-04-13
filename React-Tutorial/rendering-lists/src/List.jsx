import PropTypes from "prop-types";

function List(props) {

    const itemList = props.items;
    const category = props.category;
    // const fruits = [{id : 1, name : "apple", calories : 95}, {id : 2, name : "coconut", calories : 159}, {id : 3, name : "orange", calories : 45}, {id : 4, name : "banana", calories : 105}, {id : 5, name : "kiwi", calories : 37}];
    // Sort function for sorting list items
    //Alphabetical 
    // fruits.sort((a,b) => a.name.localeCompare(b.name));
    // Reverse Alphabetical
    // fruits.sort((a,b) => b.name.localeCompare(a.name));
    // Numerical
    // fruits.sort((a,b) => a.calories - b.calories);
    // Reverse Numerical
    itemList.sort((a,b) => b.calories - a.calories);
    // List items require a unique key just like an sql database 
    const listItems = itemList.map(item => <li key={item.id}>{item.name} : &nbsp; <b>{item.calories}</b></li>);
    return(
        <>
        <h3>{category}</h3>
        <ol>
            {listItems}
        </ol>
        </>
    );
}
List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, name: PropTypes.string, calories: PropTypes.number,}))
}
List.defaultProps = {
    category: "Category",
    items: [],
}
export default List