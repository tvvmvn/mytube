import { 
  HashRouter as Router, 
  Routes, 
  Route, 
  Link 
} from "react-router-dom";
import Home from "./components/Home";
import Order from "./components/Order";
import Other from "./components/Other";
import Pay from "./components/Pay";
import Group from "./components/Group";
import Menu from "./components/Menu";
import NotFound from "./components/NotFound";

export default function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/pay">Pay</Link>
          </li>
          <li>
            <Link to="/order">Order</Link>
          </li>
          <li>
            <Link to="/other">Other</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pay" element={<Pay />} />
        <Route path="order" element={<Order />} />
        <Route path="group/:groupId" element={<Group />} />
        <Route path="menu/:menuId" element={<Menu />} />
        <Route path="other" element={<Other />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>  
  )
}




