import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./SignUp.scss";

export default function SignUp() {
  const navigator = useNavigate();
  const [logIn, setLogIn] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    repeatPassword: "",
    passwordCheck: true,
  });

  const handleChange = (e) => {
    setLogIn(
      (prev) =>
        (prev = {
          ...prev,
          [e.target.name]: e.target.value,
        })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLogIn(
      (prev) =>
        (prev = {
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          repeatPassword: "",
        })
    );
    if (logIn.password === logIn.repeatPassword && logIn.password.length > 5) {
      setLogIn((prev) => (prev = { ...prev, passwordCheck: true }));

      alert(
        "Congratulations, you are one step closer to becoming a better WebDeveloper!!!"
      );
      navigator("/root/react");
    } else {
      setLogIn((prev) => (prev = { ...prev, passwordCheck: false }));
    }
  };

  return (
    <section className="logIn">
      <div className="signIn">
        <h1>Become a Hacker with us!!</h1>
        {!logIn.passwordCheck && (
          <p className="checkPassword">Wrong Password ❗❗❗ </p>
        )}
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={logIn.firstName}
            name="firstName"
            placeholder="Enter your first name"
            onChange={handleChange}
          />
          <input
            type="text"
            value={logIn.lastName}
            name="lastName"
            placeholder="Enter your last name"
            onChange={handleChange}
          />

          <input
            type="email"
            value={logIn.email}
            name="email"
            placeholder="Enter your email"
            onChange={handleChange}
          />
          <input
            type="password"
            value={logIn.password}
            name="password"
            placeholder="Enter your password min 6 char "
            onChange={handleChange}
          />

          <input
            type="password"
            value={logIn.repeatPassword}
            name="repeatPassword"
            placeholder="Repeat the password "
            onChange={handleChange}
          />

          <button>SignUp</button>
        </form>
      </div>
    </section>
  );
}
