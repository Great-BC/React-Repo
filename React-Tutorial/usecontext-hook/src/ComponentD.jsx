import React, {useContext} from "react";
// Imports UserContext 
import { UserContext } from "./ComponentA";
// Consumer Component
function ComponentD() {
    // Makes use of the useContext hook to assign the value of the UserContext to variable
    const user = useContext(UserContext);
    return(
    <>
    <div className="box">
        <h1>ComponentD</h1>
        {/* We can now access the user variable from component A */}
        <h2>{`Bye ${user}`}</h2>
    </div>
    </>
    )
}
export default ComponentD;