/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import { useState } from 'react';
import { useState } from 'react';
import memo from "react";
import './App.css';
let count=4;
function App(){
  const [todos,setTodos] = useState([{
    title : "go to gym",
    description : "gymming",
    id:1,
  },{
    title : "study dsa",
    description : "leetcode 1BC",
    id:3,
  },{
    title : "study dsa",
    description : "leetcode BC",
    id:2,
  }
])
function addTodo(){

  setTodos([...todos,{
    title : "study dsa",
    description : "leetcode BC",
    id:count++,
  }])


  // const newTodos=[];
  // for (let index = 0; index < todos.length; index++) {
  //   newTodos.push(todos[index]);
  // }
  // newTodos.push({
  //   title : "study dsa",
  //   description : "leetcode BC",
  //   id:4,
  // })

  // setTodos(newTodos)

}
  return (
    <>
      <button onClick={addTodo}>Add New Todo</button>
      {todos.map(function(to_do){
        return <Todo key={to_do.id} title={to_do.title} description={to_do.description}></Todo>
      })}       
    </>
  )
}

function Todo({title,description}){
  return <>
    <h2>{title}</h2>
    <h2>{description}</h2>
    <br/>
  </>
}

export default App;