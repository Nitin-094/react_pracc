import './App.css'
import { useState } from 'react';
function App() {
    const [count , setCount] = useState(0);

  return (
    <>
        <button onClick={function(){
          setCount(count+1);
        }}>Click me {count}</button>
    </>
  )
}

export default App



// import './App.css'

// function App() {


//   return (
//     <>
        
//     </>
//   )
// }

// export default App

