import "./SignUp.scss";
import { useReducer } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

const initState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  textarea: "",
};

const reducer = (value, action) => {
  switch (action.type) {
    case "vorname":
      return (value = {
        ...value,
        vorname: action.value,
      });
    case "nachname":
      return (value = {
        ...value,
        nachname: action.value,
      });
    case "email":
      return (value = {
        ...value,
        email: action.value,
      });
    case "phone":
      return (value = {
        ...value,
        phone: action.value,
      });
    case "textarea":
      return (value = {
        ...value,
        textarea: action.value,
      });
    case "initial":
      return initState;

    default:
      return value;
  }
};

export default function Contacts() {
  const navigate = useNavigate();
  const [search, setLogged, logged] = useOutletContext();
  initState.firstName = logged.firstName;
  initState.lastName = logged.lastName;
  initState.email = logged.email;
  const [value, dispatch] = useReducer(reducer, initState);
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://hackerteamserver.onrender.com/messages", {
      method: "POST",
      body: JSON.stringify(value),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: "initial" });
        navigate("/my/react");
      });
  };
  return (
    <section className="logIn">
      <div className="signIn">
        <form onSubmit={handleSubmit} className="form">
          <input
            placeholder="Name"
            type="text"
            value={value.firstName}
            onChange={(e) =>
              dispatch({ type: "vorname", value: e.target.value })
            }
            required
          />

          <input
            placeholder="Surname"
            type="text"
            required
            value={value.lastName}
            onChange={(e) =>
              dispatch({ type: "nachname", value: e.target.value })
            }
          />

          <input
            placeholder="E-mail"
            required
            type="email"
            value={value.email}
            onChange={(e) => dispatch({ type: "email", value: e.target.value })}
          />

          <input
            placeholder="Phone"
            required
            type="tel"
            value={value.phone}
            onChange={(e) => dispatch({ type: "phone", value: e.target.value })}
          />

          <textarea
            required
            placeholder="Text us..."
            rows="10"
            cols="47"
            onChange={(e) =>
              dispatch({ type: "textarea", value: e.target.value })
            }
          />

          <button
            onClick={() => {
              alert(
                "Thank you for your message, we will contact you as soon as possible."
              );
            }}
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
