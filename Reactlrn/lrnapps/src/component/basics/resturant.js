import React, { useState } from 'react'
import './style.css';
import Menu from './menuapi.js';
import Menucard from './Menucard';
import Navbar from './Navbar';



const Resturant = () => {
  const [menuData,setMenu] = useState(Menu);
  console.log(menuData);
  const getItems=(category)=>{
    const itemList = Menu.filter((curelement)=>{
      return curelement.category === category;
    });
    console.log(itemList);
    setMenu(itemList);
  } 
  return (
    <>
    <Navbar getItem={getItems} />
      <Menucard menuData={menuData} />
    </>
  );
}

export default Resturant;