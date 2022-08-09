import React from 'react'

export const TodoItems = (props) => {

  return (
    <>
      <div className='border border-dark m-3 p-3' >
        <h3 >{props.todo.title}</h3>
        <p>{props.todo.desc}</p>
        <button className='bg-danger rounded btn-sm' onClick={() => {
          props.deleteit(props.todo.tid)
        }} >Delete</button>
        {/* <button className='bg-primary mx-3 rounded'>Edit</button> */}
      </div>
    </>
  )
}
