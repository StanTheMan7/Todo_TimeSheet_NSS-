import React from 'react'
import "./todoapp.css"

function TodoApp() {
    return (
        <div className='todo'>
            <div>
            <input type="text" name="text" id="text" placeholder="Add your name here"></input>
            </div>
        
            <div>
            <input type="text" name="text" id="text" placeholder="Add task Here "></input>
            </div>

            <div>
            <input type="date" name="date" id="date"></input>
            </div>

            <div>
            <input type="time" name="time" id="time"></input>
            </div>

            <div>
            <input type="time" name="time" id="time"></input>
            </div>
            
            <div className = "btnholder">
            <button className="add-btn">Add Task</button>
            </div>
            
        </div>
    )
}
export default TodoApp;