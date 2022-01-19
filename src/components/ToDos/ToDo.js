import React from 'react'
import './Todo.css'

function ToDo({todo, id}) {
    return (
        <div className='todo-div'
         key={id}>
          {id}. {todo.name}
        </div>
    )
}

export default ToDo
