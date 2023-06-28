import { useState } from "react";

export default function Cart() {

  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart") || "[]"));
  
  return (
    <>
      <h1>Cart</h1>

      {cart.length < 1 && (
        <p>No items.</p>
      )}

      {cart.map(item => (
        <li key={item}>{item}</li>  
      ))}      
    </>  
  )
}