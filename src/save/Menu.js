import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DATA = [
  { menuId: 1, name: "Ice Cafe Americano", src: "" },
  { menuId: 2, name: "Ice Cafe Latte", src: "" },
  { menuId: 3, name: "Java Chip Frappuccino", src: "" },
  { menuId: 4, name: "Caramel Frappuccino", src: "" },
  { menuId: 5, name: "Mango Banana Blended", src: "" },
  { menuId: 6, name: "Blueberry Bagel", src: "" },
  { menuId: 7, name: "Wordmark square myg 237", src: "" },
]

export default function Menu() {

  const { menuId } = useParams();
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  const [inCart, setInCart] = useState(false);
  const menu = DATA.find(menu => menu.menuId == menuId); 

  useEffect(() => {
    cart.forEach(item => {
      if (item.menu.menuId == menuId) {
        setInCart(true)
      }
    })
  }, [])

  function addToCart() {
    // send menuId to server 
    const newItem = { 
      id: "u" + Date.now(), 
      menu,
      created: new Date(),
      count: 1
    }
      
    const updatedCart = [...cart, newItem];
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    setInCart(true);
  }

  return (
    <>
      <h1>
        {menu.name}
      </h1>
      <p>description</p>
      <button onClick={addToCart} disabled={inCart}>
        Add To Cart
      </button>
    </>  
  )
}