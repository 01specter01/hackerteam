import { useState } from "react";
import { Outlet } from "react-router-dom";
import Nav from "../Nav";
import "./Root.scss";
import Footer from "../footer/Footer";

export default function Root() {
  const [search, setSearch] = useState("");
  return (
    <div className="rootcontainer">
      <Nav setSearch={setSearch} />
      <Outlet context={search} />
      <Footer />
    </div>
  );
}
