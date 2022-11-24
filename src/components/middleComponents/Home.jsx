import { useOutletContext } from "react-router-dom";
import Tools from "../Tools";
import Publicty from "./Publicty";
import "./Home.css";

export default function Home() {
    const [search] = useOutletContext();
    let text =
        "React is a Javascript library for building user interfaces, the Hackerteam is commited to helping beginners to get to know how to best use React and it's components. On this page we've listed some React-related contend that you can take advantage off in your career as an developer. For further information, feel free to navigate the sections to see the other pages. If you habe any questions or inquiries do not hesitate to use our contacting form under the navigation point Contact.";

    return (
        <div className="home">
            <span>
                <h1>Welcome to Hackerteam, the platform to learn React</h1>
                <Tools str={text} search={search} />
                <br />
                <br />
                <h3>How does one go about creating a react app?</h3>
                <ol>
                    <li>
                        Download NodeJS from official website:
                        https://nodejs.org/en/
                    </li>
                    <li>Install text editor i.e. Visual-Studio-Code</li>
                    <li>Wright in Terminal: create-react-app my-react-app</li>
                </ol>
                <h3>How does one go about creating a react app?</h3>
            </span>
            <Publicty />
        </div>
    );
}
