function Food() {
    // You need a set of curly braces when creating javascript within the return But dont when creating outside it
    const food1 = "Orange";
    const food2 = "Banana";
    return(
        <ul>
            <li>Apple</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase}</li>
        </ul>
    );
}

export default Food