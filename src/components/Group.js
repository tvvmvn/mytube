import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const DATA = [
  {
    groupId: 1, name: "Espresso", menu: [
      { menuId: 1, name: "Ice Cafe Americano" },
      { menuId: 2, name: "Ice Cafe Latte" },
    ]
  },
  {
    groupId: 2, name: "Frappucino", menu: [
      { menuId: 3, name: "Java Chip Frappuccino" },
      { menuId: 4, name: "Caramel Frappuccino" },
    ]
  },
  {
    groupId: 3, name: "Blended", menu: [
      { menuId: 5, name: "Mango Banana Blended" },
    ]
  },
  {
    groupId: 4, name: "Bread", menu: [
      { menuId: 6, name: "Blueberry Bagel" }
    ]
  },
  {
    groupId: 5, name: "Mug & Glass", menu: [
      { menuId: 7, name: "Wordmark square myg 237ml" }
    ]
  },
]

export default function MenuList() {

  const { groupId } = useParams();
  // fetching data 
  const group = DATA.find(group => group.groupId == groupId);

  const menuList = group.menu.map(item => (
    <li key={item.menuId}>
      <Link to={`/menu/${item.menuId}`}>
        {item.name}
      </Link>
    </li>  
  )) 

  return (
    <>
      <h1>{group.name}</h1>
      <ul>
        {menuList}
      </ul>
    </>  
  )
}