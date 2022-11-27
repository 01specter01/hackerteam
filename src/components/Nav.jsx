import { NavLink, useNavigate } from "react-router-dom";
import data from "../data.json";
import "./Nav.scss";
import reactLogo from "../assets/react.svg";
import { BsSearch } from "react-icons/bs";
import { MdLogin, MdLogout } from "react-icons/md";
import { IoDocumentTextOutline, IoVideocamOutline } from "react-icons/io5";
import { TbBellRinging } from "react-icons/tb";
import { MdOutlineContactMail } from "react-icons/md";

export default function Nav({ setSearch, logged, setLogged }) {
  const navigator = useNavigate();
  const getIcon = (index) => {
    switch (index) {
      case 1:
        return <IoDocumentTextOutline />;
      case 2:
        return <IoVideocamOutline />;
      case 3:
        return <TbBellRinging />;
      case 4:
        return <MdOutlineContactMail />;
    }
  };
  return (
    <div className="navContainer">
      <div className="first">
        <NavLink to="/my/react">
          <img src={reactLogo} alt="reactLogo" />
        </NavLink>
        {data.navItems.map((item, i) => (
          <NavLink key={item} to={`/my/${item}`}>
            <span className="textNav">
              {item[0].toUpperCase() + item.slice(1)}
            </span>
            <span className="iconNav">{getIcon(i)}</span>
          </NavLink>
        ))}
      </div>
      <div className="searchContainer">
        {/* Toggle icon Login vs Logout + userName in dependence of state logged => userObject || false*/}
        {!logged ? (
          <MdLogin
            style={{ color: "white", margin: "10px", width: "24px" }}
            onClick={() => navigator("/my/login")}
          />
        ) : (
          <>
            <span
              style={{ color: "white", margin: "10px" }}
              className="username"
            >
              {JSON.parse(localStorage.getItem("user")).firstName}
            </span>
            <MdLogout
              style={{ color: "white", margin: "10px", width: "24px" }}
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
