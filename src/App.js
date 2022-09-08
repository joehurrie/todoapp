import './App.css';
import React from 'react';
import Tasklist from './Components/Tasklist';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todos, setTodos] = React.useState([])
  const inputRef = React.useRef()
  
  
  const handleClick = (e) => {
    if (inputRef.current.value === '')return;
    const name = inputRef.current.value
        setTodos(prev => {
          return [...prev,{id:uuidv4(),name:name,completed:false}]
        })
        inputRef.current.value = null
        
  }
    const toggler = (todoId) => {

      const allTodos = [...todos]
        const todo = allTodos.find(todo => todo.id === todoId)
        todo.completed = !todo.completed
        setTodos(allTodos)

    }
    const removeItem = () => {
     const newTodos = todos.filter(todo => todos.completed)
      setTodos(newTodos)
  }
    return (
      <div className="App">
        <h2>Task Manager</h2>
        <input ref={inputRef} type='text' name='' id='' />
        <button onClick={ () => handleClick()}>Add Task</button>
        <button onClick={ () => removeItem()}>Remove Task</button>
        <Tasklist todos ={todos} toggler={toggler} />
  
      </div>
    );
  }
  
  export default App;
