import { useOutletContext } from "react-router-dom";
import Publicty from "./Publicty";

export default function Home() {
  const search = useOutletContext();
  const text =
    "On this page we've listed some React-related communities that you can be a part of; see the other pages in this section for additional online and in-person learning materials";

  return (
    <div className="home">
      {text.slice(0, text.indexOf(search))}
      <span className="searched">{search}</span>
      {text.slice(text.indexOf(search) + search.length)}
      <Publicty />
    </div>
  );
}
