import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Nav from "../Nav";
import "./Root.scss";
import Footer from "../footer/Footer";

export default function Root() {
  // Use state to check is user logged or no => userObject || false (is depend on localstorage)
  const user = JSON.parse(localStorage.getItem("user"));
  const [logged, setLogged] = useState(user ? user : false);
  const [search, setSearch] = useState("");

  return (
    <div className="rootcontainer">
      <Nav setSearch={setSearch} logged={logged} setLogged={setLogged} />
      <Outlet context={[search, setLogged, logged]} />
      <Footer />
    </div>
  );
}
