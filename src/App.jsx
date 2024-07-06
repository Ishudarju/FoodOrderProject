import React from "react";
import MyNav from "./Components/MyNav";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Card from "./Pages/Card/Card";
import Placeorder from "../src/Pages/PlaceOrder/Placeorder";
// import Signin from "./Components/Signin";
// import Placeorder from "./";

const App=()=>{
  return(
    
    <div className='app'> 
       <MyNav/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='/Signin' element={<Signin/>}/> */}
        <Route path='/card' element={<Card/>}/>
        <Route path='/placeorder' element={<Placeorder/>}/>
        
        
       </Routes>
       <Footer/>
      
    </div>
  )
}
export default App