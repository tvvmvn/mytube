import { useState, useEffect } from "react";

export default function Cart() {
  const [cart, setCart] = useState([]);

  useState(() => {
    // req to server
    const raw = localStorage.getItem("cart") || "[]";
    const data = JSON.parse(raw);

    setCart(data);
  }, [])

  function updateCount(id, count) {
    const updatedCart = cart.map(item => {
      if (item.id == id) {
        return { ...item, count }
      }
      return item;
    })

    // req to server
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    
    setCart(updatedCart);
  }

  function deleteItem(id) {
    console.log(id)

    const updatedCart = cart.filter(item => item.id !== id);

    // req to server
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    
    setCart(updatedCart);
  }
  
  return (
    <>
      <h1>Cart</h1>
      {cart.map(item => 
        <Item 
          key={item.id} 
          item={item} 
          updateCount={updateCount}
          deleteItem={deleteItem}
        />
      )}
    </>  
  )
}

function Item({ item, updateCount, deleteItem }) {
  const [count, setCount] = useState(item.count);

  useEffect(() => {
    updateCount(item.id, count);
  }, [count])

  return (
    <li key={item.id} style={{ marginTop: "1rem" }}>
      {item.menu.name}
      <p>
        Qty: {item.count} {" "}
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(count + 1)}>+</button>
      </p>
      <button onClick={() => deleteItem(item.id)}>Delete</button>
    </li>
  )
}