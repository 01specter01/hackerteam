import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import data from "../data.json";
import "./Nav.scss";
import reactLogo from "../assets/react.svg";
import { BsSearch } from "react-icons/bs";
import { MdLogin, MdLogout } from "react-icons/md";

export default function Nav({ setSearch, logged, setLogged }) {
  const navigator = useNavigate();
  return (
    <div className="navContainer">
      <img src={reactLogo} alt="reactLogo" />
      {data.navItems.map((item) => (
        <NavLink key={item} to={`/my/${item}`}>
          {item[0].toUpperCase() + item.slice(1)}
        </NavLink>
      ))}
      <div className="searchContainer">
        {/* Toggle icon Login vs Logout + userName in dependence of state logged => userObject || false*/}
        {!logged ? (
          <MdLogin
            style={{ color: "white", margin: "10px" }}
            onClick={() => navigator("/my/login")}
          />
        ) : (
          <>
            <span style={{ color: "white", margin: "10px" }}>
              {logged.firstName}
            </span>
            <MdLogout
              style={{ color: "white", margin: "10px" }}
              onClick={() => {
                // on logout remove userName from localstorage && setLogged to false
                setLogged(false);
                localStorage.removeItem("user");
                navigator("/my/react");
              }}
            />
          </>
        )}
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
