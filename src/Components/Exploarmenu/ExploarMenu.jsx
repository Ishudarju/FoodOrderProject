import React from "react"
import './ExploarMenu.css'
import { menu_list } from "../../assets/assets"



const ExploarMenu=({category,setCategory})=>{
  

  return(
    
    <div className='explore-menu' id="explore-menu">
       <h1>Explore Our Menu</h1>
       <p className="explore-menu-text">Choose form a diverse menu featuring a delectable array</p>
       <div className="explore-menu-list">
        {menu_list.map((item,intex)=>{
            return(
                <div onClick={()=>setCategory(prev=>prev===item.menu_name? "All":item.menu_name)}key={intex} className="explore-menu-list-item">
                     <img className={ category===item.menu_name?"active":""}src={item.menu_image}alt=""/>
                     <p>{item.menu_name}</p>
                </div>
            )
        })}

       </div>
       <hr/>
     
    </div>
  )
}
export default ExploarMenu