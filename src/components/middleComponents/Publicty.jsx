import "./Publicity.scss";
import { Animated } from "react-animated-css";
import { useNavigate } from "react-router-dom";
import reactLogo from "../../assets/react.svg";
import { useState } from "react";

export default function Publicty() {
  const navigator = useNavigate();
  const [show, setShow] = useState(false);
  const handleClickBtn = () => {
    navigator("/root/subscription");
  };
  setTimeout(() => {
    setShow(true);
  }, 500);
  return (
    <>
      <div className={`publicity ${show && "show"}`}>
        <h1>
          "Software Developer, an organism that turns caffeine into software"
        </h1>
        <div className="textPublicity">
          <h1>Hacker Team </h1>
          <h3>Learning Platform to get started with react</h3>

          <Animated
            animationIn="shake"
            animationOut="headShake"
            isVisible={true}
            animationOutDuration={9000}
            animationInDelay={1000}
          >
            <button className="animatedBtn" onClick={handleClickBtn}>
              Subscribe Us
            </button>
          </Animated>
        </div>
      </div>
    </>
  );
}
