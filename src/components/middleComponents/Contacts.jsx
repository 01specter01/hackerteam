import "./Contacts.scss";
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
    fetch("http://localhost:3000/messages", {
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
    <div>
      <div className="fC">
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            placeholder="text you Name"
            type="text"
            value={value.firstName}
            onChange={(e) =>
              dispatch({ type: "vorname", value: e.target.value })
            }
            required
          />
          <label>Surname</label>
          <input
            placeholder="text you Surname"
            type="text"
            required
            value={value.lastName}
            onChange={(e) =>
              dispatch({ type: "nachname", value: e.target.value })
            }
          />
          <label>Email Adress</label>
          <input
            placeholder="text your E-mail"
            required
            type="email"
            value={value.email}
            onChange={(e) => dispatch({ type: "email", value: e.target.value })}
          />
          <label>Phone Number</label>
          <input
            placeholder="text your number phone"
            required
            type="tel"
            value={value.phone}
            onChange={(e) => dispatch({ type: "phone", value: e.target.value })}
          />
          <br />
          <textarea
            required
            placeholder="Text us..."
            rows="10"
            cols="47"
            onChange={(e) =>
              dispatch({ type: "textarea", value: e.target.value })
            }
          />
          <br />
          <button
            onClick={() => {
              alert(
                "Thank you for your message, we will contact you as soon as possible."
              );
            }}
          >
            send
          </button>
        </form>
      </div>
    </div>
  );
}
