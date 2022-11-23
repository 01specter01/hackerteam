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
      default: return value
  }
};

export default function Contacts() {
  const [value, dispatch] = useReducer(reducer, initState);

  return (
    <div>
      <div className="fC">
        <form>
          <label>Vorname</label>
          <input
            type="text"
            value={value.vorname}
            onChange={() => dispatch({ type: "vorname" })}
            required
          />
          <label>Nachname</label>
          <input
            type="text"
            required
            value={value.nachname}
            onChange={() => dispatch({ type: "nachname" })}
          />
          <label>Email Adresse</label>
          <input
            required
            type="email"
            value={value.email}
            onChange={() => dispatch({ type: "email" })}
          />
          <label>telphonenummer</label>
          <input
            required
            type="number"
            value={value.phone}
            onChange={() => dispatch({ type: "phone" })}
          />
          <br />
          <textarea
            required
            placeholder="Ihr Nachricht an uns"
            rows="10"
            cols="47"
          />
          <br />
          <button onClick={()=>{alert("vielen Dank für Ihr Nachricht wir melden uns so schnell wie möglich bei Ihnen!!")}} >send</button>
        </form>
      </div>
    </div>
  );
}
