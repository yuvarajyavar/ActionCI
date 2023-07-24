/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
import React, { useState } from 'react';

const App = () => {
	  const [tasks, setTasks] = useState([
		      { id: 1, title: 'Task 1' },
		      { id: 2, title: 'Task 2' },
		    ]);

	  const [newTaskTitle, setNewTaskTitle] = useState('');

	  const handleInputChange = (event) => {
		      setNewTaskTitle(event.target.value);
		    };

	  const handleAddTask = () => {
		      if (newTaskTitle.trim() !== '') {
			            const newTask = {
					            id: tasks.length + 1,
					            title: newTaskTitle,
					          };

			            setTasks([...tasks, newTask]);
			            setNewTaskTitle('');
			          }
		    };

	  const handleUpdateTask = (taskId, newTitle) => {
		      const updatedTasks = tasks.map((task) =>
			            task.id === taskId ? { ...task, title: newTitle } : task
			          );

		      setTasks(updatedTasks);
		    };

	  const handleDeleteTask = (taskId) => {
		      const filteredTasks = tasks.filter((task) => task.id !== taskId);

		      setTasks(filteredTasks);
		    };

	  return (
		      <div>
		        <h1>Task Manager</h1>
		        <div>
		          <input
		            type="text"
		            value={newTaskTitle}
		            onChange={handleInputChange}
		            placeholder="Enter task title"
		          />
		          <button onClick={handleAddTask}>Add Task</button>
		        </div>
		        <ul>
		          {tasks.map((task) => (
				            <li key={task.id}>
				              <input
				                type="text"
				                value={task.title}
				                onChange={(e) => handleUpdateTask(task.id, e.target.value)}
				              />
				              <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
				            </li>
				          ))}
		        </ul>
		      </div>
		    );
};

export default App;
