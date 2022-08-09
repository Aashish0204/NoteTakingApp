import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import { Todos } from './components/Todos'
import { Addtask } from './components/Addtask'
import { About } from './components/About'
import React, { useState } from 'react';
import { useEffect } from 'react';
import {
  BrowserRouter ,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  let initTodos;
  if (localStorage.getItem("todos") == null) {
    initTodos = [];
  }
  else {
    initTodos = JSON.parse(localStorage.getItem('todos'));
  }

  const deleteit = (id) => {
    setTodos(todos.filter((e) => {
      return e.tid !== id;
    }))
    localStorage.setItem('todos', JSON.stringify(todos));
  }


  const addTodos = (title, desc) => {
    let tid;
    ((todos.length - 1) < 0 ? tid = 0 : tid = (todos[todos.length - 1].tid + 1))
    const newTodos = {
      tid: tid,
      title: title,
      desc: desc,
    }
    setTodos([...todos, newTodos]);
  }

  const [todos, setTodos] = useState(initTodos)
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  return (
    <>
      <BrowserRouter>
      <Header title="My Todos List" searchbar={true} />
      <Routes>
        <Route exact path="/" element={
              <>
                <Addtask addTodos={addTodos} />
                <Todos todos={todos} deleteit={deleteit} />
              </>
          }>
        </Route>
        <Route exact path="/about" element={
              <>
                <About />
              </>
          }>
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>

    </>
  );
}

export default App;
