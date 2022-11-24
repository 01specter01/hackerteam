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
                <h3>Answers to most frequent asked questions</h3> <br />
                <h6>Why use React instead of Javascript?</h6>
                <p>
                    Depending on the task, React can be helpfull when creating a
                    large aplication with multiple components. React uses
                    something called the virtual DOM (Document Object Model) a
                    copy of the real DOM, and then only update the componends
                    wich have been changed, in contrast to the entire DOM. This
                    allows the rendering process to take less time and be
                    efficient.
                </p>{" "}
                <br />
                <h6>How does one go about creating a react app?</h6>
                <ol>
                    <li>
                        Download NodeJS from official website:
                        https://nodejs.org/en/
                    </li>
                    <li>Install text editor i.e. Visual-Studio-Code</li>
                    <li>Wright in Terminal: create-react-app my-react-app</li>
                </ol>
                <br />
                <h6>Is there a dissadvantage to using React?</h6>
                <p>
                    A drawback could be the constand need to relearn how to work
                    with React since it is always changes. But this depends more
                    on the developers attitude towards keeping up with each
                    iteration.
                </p>{" "}
            </span>
            <Publicty />
        </div>
    );

}
