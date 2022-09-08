import React from 'react'


const Task = ({todo,toggler}) => {
    const handleChange = ()=> {
        toggler(todo.id)
    }
  return (
    <div>
        <label>
            <input className='check' type="checkbox"  name="" id="" onChange={()=> handleChange()}/>
            {todo.name}
            {console.log(todo.completed)}
        </label>
    </div>
  )
}

export default Task