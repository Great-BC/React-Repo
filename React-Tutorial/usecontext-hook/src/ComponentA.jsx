import ComponentB from "./ComponentB";
import React, {useState, createContext} from "react";
// Makes use of the createContext hook to create a variable UserContext
export const UserContext = createContext();
// useContext() = lets us share values among various levels of component without passing props through each level

// Provider Component(Component with the data to access)
function ComponentA() {
    const [user, setUser] = useState("Great")

    return(
    <>
    <div className="box">
        <h1>ComponentA</h1>
        <h2>{`Hello ${user}`}</h2>
        {/* Assigns the user variable to the UserContext const */}
        <UserContext.Provider value={user}>
        <ComponentB/>
        </UserContext.Provider>
        
    </div>
    </>
    )
}
export default ComponentA;