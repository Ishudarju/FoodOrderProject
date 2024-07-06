import React, { useState } from "react"
import './Home.css'
import Header from "../../Components/Header/Header"
import ExploarMenu from "../../Components/Exploarmenu/ExploarMenu"
// import Signin from "../../Components/Signin"
import FoodDisplay from "../../Components/FoodDisplay/FoodDisplay"

 



const Home=()=>{

  const[category,setCategory]=useState("All");
  

  return(
    
    <div>
        
        <Header/>
        <ExploarMenu category={category} setCategory={setCategory}/>
        <FoodDisplay category ={category}/>
    </div>
  )
}
export default Home