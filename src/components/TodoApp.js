import React, { useState } from "react";
import "./todoapp.css";

function TodoApp() {
  const [task, setTask] = useState("");
  const [task2, setTask2] = useState("");
  const [task3, setTask3] = useState("");
  const [task4, setTask4] = useState("");
  const [task5, setTask5] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };
  const handleChange2 = (e) => {
    setTask2(e.target.value);
  };
  const handleChange3 = (e) => {
    setTask3(e.target.value);
  };
  const handleChange4 = (e) => {
    setTask4(e.target.value);
  };
  const handleChange5 = (e) => {
    setTask5(e.target.value);
  };
  const addTask = (e) => {
    if (task !== "") {
      const taskDetails = {
        id: 1 + taskList.length,
        value: task,
        value2: task2,
        value3: task3,
        value4: task4,
        value5: task5,
        isCompleted: false,
      };
      setTaskList([...taskList, taskDetails]);
    }

  };

  const deleteTask = (e, id) => {
    e.preventDefault();
    setTaskList(taskList.filter((t) => t.id !== id))
  };

  const colorChange = (e, id) => {
    e.preventDefault();
    setTaskList([...taskList], [...taskList].find((item) => item.id === id).isCompleted = true)
  }

  return (
    <div className="todo">
      <input
        type="text"
        name="text"
        placeholder="Add your name here"
        onChange={(e) => handleChange(e)}
      ></input>
      <input
        type="text"
        name="text"
        id="text"
        placeholder="Add task Here "
        onChange={(e) => handleChange2(e)}
      ></input>
      <input
        type="date"
        name="date"
        id="date"
        onChange={(e) => handleChange3(e)}
      ></input>
      <input
        type="time"
        name="time"
        id="time"
        onChange={(e) => handleChange4(e)}
      ></input>
      <input
        type="time"
        name="time"
        id="time"
        onChange={(e) => handleChange5(e)}
      ></input>
      <button className="add-btn" onClick={addTask}>
        Add Task
      </button>
      <div>
        {[...taskList].length > 0 ? (
          <ul>
            {[...taskList].map((element) => (
              <li
                key={Math.floor(Math.random() * 1000)}
                className={element.isCompleted === true && "completedTask"}
              >
                name: {element.value}, task: {element.value2}, date:
                {element.value3}, start: {element.value4}, end: {element.value5}
                ,
                <button
                  onClick={(e) => deleteTask(e, element.id)}
                  className="delete"
                >
                  X
                </button>
                <button
                  className="completed"
                  onClick={(e) => colorChange(e, element.id)}
                >
                  V
                </button>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}
export default TodoApp;
