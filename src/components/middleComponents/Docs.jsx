import data from "../../data.json";
import { useOutletContext } from "react-router-dom";
import Publicty from "./Publicty";
import "./Docs.scss";

export default function Docs() {
  const search = useOutletContext();
  return (
    <div className="docs">
      <div className="rightContainer">
        {data.docs.map((el) => (
          <div className="docContainer" key={el.title}>
            <h2>{el.title}</h2>
            <p>
              {el.description.slice(0, el.description.indexOf(search))}
              <span className="searched">{search}</span>
              {el.description.slice(
                el.description.indexOf(search) + search.length
              )}
            </p>
          </div>
        ))}
      </div>
      <Publicty />
    </div>
  );
}
