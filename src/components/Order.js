import { useState } from "react";
import { Link } from "react-router-dom";

const DATA = [
  { groupId: 1, name: "Espresso", categoryName: "Beverage" },
  { groupId: 2, name: "Frappucino", categoryName: "Beverage" },
  { groupId: 3, name: "Blended", categoryName: "Beverage" },
  { groupId: 4, name: "Bread", categoryName: "Food" },
  { groupId: 5, name: "Mug & Glass", categoryName: "Product" }
]

// Client side object
const category = ["Beverage", "Food", "Product"];

function FilterButton({ name, isPressed, setFilter }) {
  return (
    <button
      className={`${isPressed && "active"}`}
      onClick={() => setFilter(name)}
    >
      {name}
    </button>
  )
}

export default function Order() {
  const [filter, setFilter] = useState("Beverage");

  const groupList = DATA.filter(group => group.categoryName === filter).map(group => (
    <li key={group.name}>
      <Link to={`/group/${group.groupId}`}>
        {group.name}
      </Link>
    </li>  
  ))

  return (
    <>
      <h1>Order</h1>
      <div>
        {category.map(name => (
          <FilterButton 
            key={name}
            name={name}
            isPressed={filter === name}
            setFilter={setFilter}
          />
        ))}
      </div>
      <ul>
        {groupList}
      </ul>
    </>  
  )
}
