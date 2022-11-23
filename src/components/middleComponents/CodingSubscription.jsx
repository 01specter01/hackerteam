import cards from "../../data.json";
import "./CodingSubscription.scss";
export default function CodingSubscription() {
  return (
    <div className="cardsContainer">
      {cards.cards.map((card) => {
        return (
          <div className="cardContainer">
            <h1>{card.title}</h1>
            <h2>{card.text1}</h2>
            <h2>{card.text2}</h2>
            <ul className="optionCards">
              {card.text3.map((el) => (
                <li>{el}</li>
              ))}
            </ul>
            <button className="btnSignUp">SignUp</button>
          </div>
        );
      })}
    </div>
  );
}
