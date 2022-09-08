import React from 'react';
import Task from './task';

function Tasklist({todos, toggler}) {
  return(
    todos.map(todo => {
        return(
            <Task key={todo.name} todo={todo} toggler={toggler}/>
            )   
        })
    )}


export default Tasklist