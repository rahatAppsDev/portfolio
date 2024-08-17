'use client'

import Todoitems from "../Todoitems/Todoitems"
import './Todo.css'
import { useRef } from "react"
import { useState } from "react";
import { useEffect } from "react";

import React from 'react'
import { FcCancel } from "react-icons/fc";
import { FiCalendar } from "react-icons/fi";
import { GiCancel } from "react-icons/gi";






let count = 0;
const Todo = () => {

  let inputref = useRef();  
  const [currentinput,setCurrentInput] = useState("")

  const [todos,setTodos] = useState([]);
  useEffect(() => {
    let parsed = JSON.parse(localStorage.getItem("todos"));
    console.log(parsed)
 
    if (parsed !== null) {
      setTodos(parsed)
    }
  },[]);

  
  useEffect(
    () => {
        setTimeout(() => {
          console.log("ok")
            if (todos.length !== 0) {
              localStorage.setItem("todos",JSON.stringify(todos))
            
            }
        }, 100);
    },[todos]
  );
  

  const add = () => {
    
    if (currentinput !== "") {
      setTodos([...todos,{no:count++,task:inputref.current.value,display:""}])
    console.log(todos);
    inputref.current.value="";
    setCurrentInput("")
    //localStorage.setItem("todos_count",count);
    }
    
  }  
  return (
    <div className="todopage">
      <div className='todo'>
        <div className="todo-header">
            <h2>Todo List</h2>
        </div>
        <div className="todo-add">
            <div className="inputsection">
              
            <input ref={inputref} type="text" placeholder='Add Todo' className='todo-input' onChange={(event)=> {
              setCurrentInput(event.target.value.trim())

            }}/>
            {currentinput !== "" && <GiCancel size={20} className="inputcancelbtn" onClick={()=> {
              inputref.current.value="";
              setCurrentInput("")
            }}/>}
            </div>
            <button className='todo-add-btn' onClick={() => {add()}}>Add</button>
        </div>
        {todos.length !== 0 &&<div className="todolist">
         {todos.map((item,index) => {
           return <Todoitems key={index} no={index} task={item.task} display={item.display} setTodos={setTodos} />
        })}
        </div>}


    </div>
    </div>
  )
}

export default Todo