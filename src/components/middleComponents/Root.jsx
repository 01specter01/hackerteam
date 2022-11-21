import { useState } from "react";
import { Outlet } from "react-router-dom";
import Nav from "../Nav";
import "./Root.scss";

export default function Root() {
  const [search, setSearch] = useState("");
  return (
    <div>
      <Nav setSearch={setSearch} />
      <Outlet context={search} />
    </div>
  );
}
