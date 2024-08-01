import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'https://localhost:7198/tasks';
const addTaskMessage = "Task added successfully!";
const deleteTaskMessage = "Task deleted successfully!";
const customErrorMessage = "Something went wrong!";
const noTaskMessage = "No record found!";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(API_URL);
      setTasks(response.data);
    }
    catch (error) {
      if (error.response) {
        setErrorMessage(customErrorMessage);
        setTimeout(() => setErrorMessage(''), 3000);
      }
    }
  };

  const addTask = async (e) => {
    try {
      e.preventDefault();
      if (!newTask) return;
      const response = await axios.post(API_URL, { description: newTask });
      setTasks([...tasks, response.data]);
      setNewTask('');
      setMessage(addTaskMessage);
      setTimeout(() => setMessage(''), 3000);
    }
    catch (error) {
      if (error.response) {
        setErrorMessage(customErrorMessage);
        setTimeout(() => setErrorMessage(''), 3000);
      }
    }
  };

  const deleteTask = async (id) => {
    try {
      if (confirm("Are you sure you want to delete this task?") == true) {
        await axios.delete(`${API_URL}/${id}`);
        setTasks(tasks.filter(task => task.id !== id));
  
        setMessage(deleteTaskMessage);
        setTimeout(() => setMessage(''), 3000);
      } 
    }
    catch (error) {
      if (error.response) {
        setErrorMessage(customErrorMessage);
        setTimeout(() => setErrorMessage(''), 3000);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md container-width-override">
        <h1 className="text-2xl font-bold mb-4 text-center h1-override">Task Management</h1>

        {message && <div className="mb-4 text-green-500 text-center">{message}</div>}
        {errorMessage && <div className="mb-4 text-red-500 text-center">{errorMessage}</div>}
        <form onSubmit={addTask} className="mb-4 flex space-x-2">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="border p-2 flex-grow rounded"
            placeholder="New Task Description"
            required
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Task</button>
        </form>
        {/* <h3 className="text-1xl font-bold mb-4 task-list-heading">Task List</h3> */}
        {(!tasks || tasks.length==0 ) && <div className="mb-4 text-red-500 text-center">{noTaskMessage}</div>}
         {(tasks && tasks.length > 0) &&
         <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border px-4 py-2 text-left">Task Description</th>
              <th width="20%" className="border px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map(task => (
              <tr key={task.id}>
                <td className="border px-4 py-2">{task.description}</td>
                <td className="border px-4 py-2 text-center">
                  <button onClick={() => deleteTask(task.id)} className="text-red-500">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      }
      </div>
    </div>
  );
}

export default App;
