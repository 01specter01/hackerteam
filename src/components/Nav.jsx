import { NavLink } from "react-router-dom";
import data from "../data.json";
import "./Nav.scss";
export default function Nav() {
  return (
    <div className="navContainer">
      {data.navItems.map((item) => (
        <NavLink key={item} to={`/root/${item}`}>
          {item[0].toUpperCase() + item.slice(1)}
        </NavLink>
      ))}
    </div>
  );
}
