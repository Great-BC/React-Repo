import React, {useState} from "react";
function ToDoList() {

    const [tasks, setTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);
    const [newTask, setNewTasks] = useState("");

    function handleInputChange(event) {
        setNewTasks(event.target.value);
    }

    function addTask(){
        // Add newTask to task if the input element is not empty 
        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask]);
            setNewTasks("");
        }
        
    }
    // Delete Task by filtering task array and leaving only elements that are not equal to the index
    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }
    // Moves task up by making use of array destructuring to swap the index of above element
    function moveTaskUp(index) {
        if(index > 0) {
            const updatedTasks = [...tasks];
            // Makes use of array destructuring 
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
     // Moves task down by making use of array destructuring to swap the index of element below
    function moveTaskDown(index){
        if(index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            // Makes use of array destructuring 
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    // Adds task to completed tasks array and removes from ongoing tasks
    function completeTask(index) {
        setCompletedTasks(c => [...c, tasks[index]])

        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks)
    }
    return(
        <>
        <div className="to-do-list">
            <h1>To-Do-List</h1>
            
            <div>
                <input type="text" placeholder="Enter a task..." value={newTask} onChange={handleInputChange}/>
                <button className="add-button" onClick={addTask}> Add</button>
            </div>
            {/*Ongoing Tasks  */}
            <ol>
                <h2>Ongoing Tasks</h2>
                {tasks.map((task, index) => 
            
                
                <li key={index}>
                    <span className="text">{task}</span>
                    <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
                    <button className="move-button" onClick={() => moveTaskUp(index)}>☝️</button>
                    <button className="move-button" onClick={() => moveTaskDown(index)}>👇</button>
                    <button onClick={() => completeTask(index)}>✅</button>
                </li>
                )}
            </ol>
            {/* Completed Tasks */}
            <ul>
                <h2>Completed Tasks</h2>
                {completedTasks.map((task, index) =>    
                <li key={index}><span>{task}</span></li>
                
                )}
            </ul>


        </div>
        </>
    );
}
export default ToDoList;