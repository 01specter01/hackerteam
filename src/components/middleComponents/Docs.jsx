import data from "../../data.json";
<<<<<<< HEAD
import { useOutletContext } from "react-router-dom";
import "./Docs.scss";
import Publicty from "./Publicty";

export default function Docs() {
  const search = useOutletContext();
  return (
    <div className="docs">
=======

export default function Docs() {
  const search = useOutletContext();
  return ( <div className="docs">
>>>>>>> 6dac6f38098f2d9c19d2125b5f5474baa4a9344f
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
<<<<<<< HEAD
=======

>>>>>>> 6dac6f38098f2d9c19d2125b5f5474baa4a9344f
  );
}
