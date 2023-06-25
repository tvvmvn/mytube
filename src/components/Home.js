import { Link } from "react-router-dom";

const DATA = [
  { menuId: 1, name: "Cafe Ice Americano" },
  { menuId: 2, name: "Cafe Ice Latte" },
]

export default function Home() {
  return (
    <>
      <h1>Starbucks App</h1>
      <img
        width="50"
        src="/logo.png"
        alt=""
      />
      <p>
        10/12 Stars, 2 until next Reward
      </p>

      <h3>Recommened for you</h3>
      <ul>
        {DATA.map(menu => (
          <li key={menu.menuId}>
            <Link to={`/menu/${menu.menuId}`}>
              {menu.name}
            </Link>
          </li>  
        ))}
      </ul>
    </>  
  )
};