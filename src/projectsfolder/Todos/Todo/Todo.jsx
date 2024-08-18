'use client'

import Todoitems from "../Todoitems/Todoitems"
import styles from "./Todo.module.css"
import { useRef } from "react"
import { useState } from "react";
import { useEffect } from "react";

import React from 'react'
import { FcCancel } from "react-icons/fc";
import { FiCalendar } from "react-icons/fi";
import { GiCancel } from "react-icons/gi";

import Head from "next/head"




let count = 0;
const Todo = () => {

  let inputref = useRef();  
  const [currentinput,setCurrentInput] = useState("")

  const [todos,setTodos] = useState([]);
  useEffect(() => {
    let parsed = JSON.parse(localStorage.getItem("todos"));
    
 
    if (parsed !== null) {
      setTodos(parsed)
    }
  },[]);

  
  useEffect(
    () => {
        setTimeout(() => {
         
              localStorage.setItem("todos",JSON.stringify(todos))
            
            
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
    <>
    <script>0</script>
   
    <div className={styles.todopage}>
      <div className={styles.todo}>
        <div className={styles.todo_header}>
            <h2>Todo List</h2>
        </div>
        <div className={styles.todo_add}>
            <div className={styles.inputsection}>
              
            <input ref={inputref} type="text" placeholder='Add Todo' className={styles.todo_input} onChange={(event)=> {
              setCurrentInput(event.target.value.trim())

            }}/>
            {currentinput !== "" && <GiCancel size={20} className={styles.inputcancelbtn} onClick={()=> {
              inputref.current.value="";
              setCurrentInput("")
            }}/>}
            </div>
            <button className={styles.todo_add_btn} onClick={() => {add()}}>Add</button>
        </div>
        {todos.length !== 0 &&<div className={styles.todolist}>
         {todos.map((item,index) => {
           return <Todoitems key={index} no={index} task={item.task} display={item.display} setTodos={setTodos} />
        })}
        </div>}


    </div>
    </div>
    </>
  )
}

export default Todo