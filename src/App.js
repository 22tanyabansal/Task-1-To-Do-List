import {useState} from 'react';
import AddTaskForm from './components/AddTaskForm.jsx';
import ToDo from './components/ToDo.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  // Tasks (ToDo List) State
const [toDo, setToDo] = useState([]);

  // Temp State
const [newTask, setNewTask] = useState('');


  // Add task 
const addTask = () => {
    if(newTask) {
    let num = toDo.length + 1; 
    let newEntry = { id: num, title: newTask, status: false }
    setToDo([...toDo, newEntry])
    setNewTask('');
    }
}

  // Delete task 
const deleteTask = (id) => {
    let newTasks = toDo.filter( task => task.id !== id)
    setToDo(newTasks);
}

  // Mark task as done or completed
const markDone = (id) => {
    let newTask = toDo.map( task => {
    if( task.id === id ) {
        return ({ ...task, status: !task.status })
    }
    return task;
    })
    setToDo(newTask);
}

return (
    <div className="container App">

    <br /><br />
    <h2>To Do List App</h2>
    <br /><br />
    <AddTaskForm 
        newTask={newTask}
        setNewTask={setNewTask}
        addTask={addTask}
    />

    {/* Display ToDos */}

    {toDo && toDo.length ? '' : 'No Tasks...'}

    <ToDo
    toDo={toDo}
    markDone={markDone}
    deleteTask={deleteTask}
    />
    </div>
);
}
export default App;
