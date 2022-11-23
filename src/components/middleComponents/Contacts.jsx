import React from "react";
import "./Contacts.scss";
import { useReducer } from "react";

const initState = {
  vorname: "",
  nachname: "",
  email: "",
  phone: "",
};

const reducer = (value, action) => {
  console.log(value, action);
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
    default:
      return value;
  }
};

export default function Contacts() {
  const [value, dispatch] = useReducer(reducer, initState);

  return (
    <div>
      <div className="fC">
        <form>
          <label>Name</label>
          <input
            placeholder="text you Name"
            type="text"
            value={value.vorname}
            onChange={() => dispatch({ type: "vorname" })}
            required
          />
          <label>Surname</label>
          <input
            placeholder="text you Surname"
            type="text"
            required
            value={value.nachname}
            onChange={() => dispatch({ type: "nachname" })}
          />
          <label>Email Adress</label>
          <input
            placeholder="text your E-mail"
            required
            type="email"
            value={value.email}
            onChange={() => dispatch({ type: "email" })}
          />
          <label>Phone Number</label>
          <input
            placeholder="text your number phone"
            required
            type="tel"
            value={value.phone}
            onChange={() => dispatch({ type: "phone" })}
          />
          <br />
          <textarea required placeholder="Text us..." rows="10" cols="47" />
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
