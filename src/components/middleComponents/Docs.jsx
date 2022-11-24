import data from "../../data.json";
import { useOutletContext } from "react-router-dom";
<<<<<<< HEAD
import "./Docs.scss";
=======

>>>>>>> 35c063822a4dce497d01bec427332609897f90e4
import Publicty from "./Publicty";
import "./Docs.scss";
import Tools from "../Tools";

export default function Docs() {
  const [search] = useOutletContext();
  return (
    <div className="docs">
      <div className="rightContainer">
        {data.docs.map((el) => (
          <div className="docContainer" key={el.title}>
            <h2>{el.title}</h2>
            <p>
              <Tools search={search} str={el.description} />
            </p>
          </div>
        ))}
      </div>
      <Publicty />
    </div>
  );
}
