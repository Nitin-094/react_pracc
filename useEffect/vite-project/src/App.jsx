/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import './App.css'

function App() {
const [todos,setTodos] = useState([]);

useEffect(()=>{
  setInterval(()=>
    {fetch("http://localhost:3000/todoo")
    .then(async (res)=>{
      const response = await res.json();
      setTodos([...todos,response])
      console.log(response);
    })}
    ,10000)
  },[])

  return (
    <div>
      {todos.map((td)=><Todo key={td._id} title={td.title} description={td.description} />)}
    </div>
  )
}

function Todo({title,description}){
  return<div>
  <h2>
    {title}
  </h2>
  <h2>
    {description}
  </h2>
  <br/>
  </div>
}

export default App