import { NavLink, useNavigate } from "react-router-dom";
import data from "../data.json";
import "./Nav.scss";
import reactLogo from "../assets/react.svg";
import { BsSearch } from "react-icons/bs";
import { MdLogin } from "react-icons/md";

export default function Nav({ setSearch }) {
  const navigator = useNavigate();

  return (
    <div className="navContainer">
      <img src={reactLogo} alt="reactLogo" />
      {data.navItems.map((item) => (
        <NavLink key={item} to={`/root/${item}`}>
          {item[0].toUpperCase() + item.slice(1)}
        </NavLink>
      ))}
      <div className="searchContainer">
        <MdLogin
          style={{ color: "white", margin: "10px" }}
          onClick={() => navigator("/root/login")}
        />
        <input
          className="searchInput"
          type="text"
          placeholder="Search"
          onChange={(e) => setSearch((prev) => (prev = e.target.value))}
        />
        <BsSearch className="searchIcon" />
      </div>
    </div>
  );
}
