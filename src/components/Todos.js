import React from 'react'
import { TodoItems } from './TodoItems'

export const Todos = ({ todos, deleteit }) => {
  const todosstyle={
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    minHeight: "325px",
  }

  return (
    <div >
      <h2 className='text-center my-3'><u>Todo's Tasks</u></h2>
      <div style={todosstyle}>
        {todos.length === 0 ? <h4 className='text-center py-3'>No Todos to display</h4> : todos.map((todo) => {
          return (<TodoItems todo={todo} deleteit={deleteit} key={todo.tid} />)
        })}
      </div>

    </div>
  )
}

