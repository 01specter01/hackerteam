import { useOutletContext } from "react-router-dom";
import Tools from "../Tools";
import Publicty from "./Publicty";

import "./Home.scss";

export default function Home() {
  const [search] = useOutletContext();

  return (
    <div className="home">
      <div className="homeLeft">
        <h1>Welcome to Hackerteam, the platform to learn React</h1>
        <Tools search={search} />
        <h2>Answers to most frequent asked questions</h2> <br />
        <h3>Why use React instead of Javascript?</h3>
        <p>
          Depending on the task, React can be helpfull when creating a large
          aplication with multiple components. React uses something called the
          virtual DOM (Document Object Model) a copy of the real DOM, and then
          only update the componends wich have been changed, in contrast to the
          entire DOM. This allows the rendering process to take less time and be
          efficient.
        </p>
        <h3>How does one go about creating a react app?</h3>
        <ol className="list">
          <li>Download NodeJS from official website: https://nodejs.org/en/</li>
          <li>Install text editor i.e. Visual-Studio-Code</li>
          <li>Write in Terminal: create-react-app my-react-app</li>
        </ol>
        <h3>Is there a dissadvantage to using React?</h3>
        <p>
          A drawback could be the constand need to relearn how to work with
          React since it is always changes. But this depends more on the
          developers attitude towards keeping up with each iteration.
        </p>
      </div>
      <Publicty />
    </div>
  );
}
