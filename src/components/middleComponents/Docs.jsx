import data from "../../data.json";
import { useOutletContext } from "react-router-dom";
import "./Docs.scss";
import Publicty from "./Publicty";
import "./Docs.scss";
import Tools from "../Tools";

export default function Docs() {
  const [search] = useOutletContext();
  const tools = (str) => {
    return <Tools str={str} search={search} />;
  };
  return (
    <div className="docs">
      <div className="rightContainer">
        {data.docs.map((el) => (
          <div className="docContainer" key={el.title}>
            <h2>{tools(el.title)}</h2>
            <p>{tools(el.description)}</p>
          </div>
        ))}
      </div>
      <Publicty />
    </div>
  );
}
