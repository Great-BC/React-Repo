import React, {useState, useEffect} from "react";

function MyComponent2() {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        //  Cleans up by removing event listener when the component is unmount freeing up space
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [])
   
    function handleResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
    
    return(
    <>
    <p>Window Width: {width}</p>
    <p>Window Height: {height}</p>
    </>
    );
}
export default MyComponent2;