import data from "../../data.json";
import { useNavigate } from "react-router-dom";
import "./CodingSubscription.scss";

export default function CodingSubscription() {
  const navigator = useNavigate();
  return (
    <div className="mainContainer">
      {data.cards.map((data) => {
        return (
          <div className="blockContainer">
            <h1>{data.title}</h1>
            <h2>{data.text1}</h2>
            <h3>{data.text2}</h3>
            <h3>{data.text2a}</h3>
            <ul className="options">
              {data.text3.map((el) => (
                <li>{el}</li>
              ))}
            </ul>
            <button
              className="btnSignUp"
              onClick={() => navigator("/my/signup")}
            >
              SignUp
            </button>
          </div>
        );
      })}
    </div>
  );
}
