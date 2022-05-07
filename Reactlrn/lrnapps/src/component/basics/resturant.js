import React, { useState } from 'react'
import './style.css';
import Menu from './menuapi.js';
import Menucard from './Menucard';
const Resturant = () => {
  const [menuData,setMenu] = React.useState(Menu);
  console.log(menuData);
  return (
    <Menucard menuData={menuData} />
  );
}

export default Resturant;