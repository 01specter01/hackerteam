import { useOutletContext } from "react-router-dom";
import Tools from "../Tools";
import Publicty from "./Publicty";
import "./Home.scss";
import img from "../../assets/react.svg";

export default function Home() {
  const [search] = useOutletContext();

  return (
    <div className="home">
      <div className="homeLeft">
        <h1>
          “Measuring programming progress by lines of code is like measuring
          aircraft building progress by weight.”
        </h1>
        <h2>Bill Gates</h2>
      </div>
      <p>
        <Tools search={search} />
      </p>

      <Publicty />
    </div>
  );
}
