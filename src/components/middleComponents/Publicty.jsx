import "./Publicity.scss";
import { Animated } from "react-animated-css";
import { useNavigate } from "react-router-dom";
import reactLogo from "../../assets/react.svg";

export default function Publicty() {
  const navigator = useNavigate();
  const handleClickBtn = () => {
    navigator("/root/subscription");
  };
  return (
    <div className="publicity">
      <div className="textPublicity">
        <h1>Hacker Team </h1>
        <h3>Learning Platform to get started with react</h3>
        <img src={reactLogo} className="logo react" alt="React logo" />

        <Animated
          animationIn="shake"
          animationOut="headShake"
          isVisible={true}
          animationOutDuration={9000}
        >
          <button className="animatedBtn" onClick={handleClickBtn}>
            Subscribe Us
          </button>
        </Animated>
      </div>
    </div>
  );
}
