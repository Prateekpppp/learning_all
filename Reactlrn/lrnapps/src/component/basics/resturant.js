import React, { useState } from 'react'
import './style.css';
import Menu from './menuapi.js';
import Menucard from './Menucard';



const Resturant = () => {
  const [menuData,setMenu] = useState(Menu);
  console.log(menuData);
  const getItems=(category)=>{
    const itemList = Menu.filter((curelement)=>{
      return curelement.category === category;
    });
    // console.log(itemList);
    setMenu(itemList);
  }
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          <button className="btn-group__item" onClick={()=>getItems("breakfast")}>breakfast</button>
          <button className="btn-group__item" onClick={()=>getItems("lunch")}>Lunch</button>
          <button className="btn-group__item" onClick={()=>getItems("evening")}>Evening</button>
          <button className="btn-group__item" onClick={()=>getItems("dinner")}>Dinner</button>
          <button className="btn-group__item" onClick={()=>setMenu(Menu)}>All</button>
        </div>
      </nav>
      <Menucard menuData={menuData} />
    </>
  );
}

export default Resturant;