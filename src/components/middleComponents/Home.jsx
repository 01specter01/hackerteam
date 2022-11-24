import { useOutletContext } from "react-router-dom";
import Tools from "../Tools";
import Publicty from "./Publicty";

export default function Home() {
    const [search] = useOutletContext();
    let text =
        "On this page we've listed some React-related communities that you can be a part of; see the other pages in this section for additional online and in-person learning materials";

    return (
        <div className="home">
            <p>
                <h1>Welcome to Hackerteam, the platform to learn react</h1>
                <Tools str={text} search={search} />
            </p>
            <Publicty />
        </div>
    );
}
