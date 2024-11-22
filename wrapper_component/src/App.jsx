/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import './App.css'
function App() {
  return <>
        <CardWrapper >
          {/* <div>hello mf, how u doing?</div>*/}
          {/* {BabyComponent()} */}
          <BabyComponent />
        </CardWrapper>
   </> 
}

function BabyComponent(){
  return <div>
    hello mf, how u doing?
  </div>
}

function CardWrapper({children}){
    return <div style={{border:"2px solid black",padding:20}} >
      {children}
    </div>
}

export default App