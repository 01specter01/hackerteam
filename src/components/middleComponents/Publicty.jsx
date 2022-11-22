import "./Publicity.scss";
import { Animated } from "react-animated-css";
import { useNavigate } from "react-router-dom";

export default function Publicty() {
  const navigator = useNavigate();
  const handleClickBtn = () => {
    navigator("/root/subscription");
  };
  return (
    <div className="publicity">
      <div className="textPublicity">
        <h1>Congratulation</h1>
        <h3>Just here with us, become the best web developer</h3>
        <h4>Hacker Team </h4>

        <Animated
          animationIn="shake"
          animationOut="headShake"
          isVisible={true}
          animationOutDuration="9000"
        >
          <button className="animatedBtn" onClick={handleClickBtn}>
            Subscribe Us
          </button>
        </Animated>
      </div>
    </div>
  );
}
