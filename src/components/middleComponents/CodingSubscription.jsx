import cards from "../../data.json";
import "./CodingSubscription.scss";
import { useNavigate } from "react-router-dom";
export default function CodingSubscription() {
  const navigator = useNavigate();
  return (
    <div className="cardsContainer">
      {cards.cards.map((card) => {
        return (
          <div className="cardContainer">
            <h1>{card.title}</h1>
            <h2>{card.text1}</h2>
            <h2>{card.text2}</h2>
            <h2>{card.text2a}</h2>
            <ul className="optionCards">
              {card.text3.map((el) => (
                <li>{el}</li>
              ))}
            </ul>
            <button
              className="btnSignUp"
              onClick={() => navigator("/root/signup")}
            >
              SignUp
            </button>
          </div>
        );
      })}
    </div>
  );
}
