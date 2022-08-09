import React, { useState } from 'react';


export const Addtask = (props) => {
  const submit=(e)=>{
    e.preventDefault();
    (!title)?alert("Title can't be empty"):props.addTodos(title,desc);
    setTitle("");
    setDesc("");

  }
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  return (
    <>
    <h2 className='text-center '><u>Add a task</u></h2>
    <div className='m-3 p-2 border border-dark bg-light rounded'>
      <form onSubmit={submit} >
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" value={title} className="form-control" onChange={(e)=>{setTitle(e.target.value)}} id="title" />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">Desc</label>
          <input type="text" value={desc} className="form-control" onChange={(e)=>{setDesc(e.target.value)}} id="desc" />
        </div>
        <button type="submit"  className="btn btn-primary">Add Task</button>
      </form>
    </div>
    </>
  )
}
