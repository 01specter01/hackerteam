import { useOutletContext } from "react-router-dom";
import Tools from "../Tools";
import Publicty from "./Publicty";
import home from "../../data.json";

import "./Home.scss";

export default function Home() {
  const [search] = useOutletContext();
  const tools = (str) => {
    return <Tools str={str} search={search} />;
  };
  return (
    <div className="home">
      <div className="homeLeft">
        <>
          <h1>{tools(home.home.h1)}</h1>
          <h2>{tools(home.home.h2)}</h2>

          {home.home.paragraph.map((el) => {
            return el.map((text, i) => {
              return i === 0 ? <h3>{tools(text)}</h3> : <p>{tools(text)}</p>;
            });
          })}
        </>
      </div>
      <Publicty />
    </div>
  );
}
