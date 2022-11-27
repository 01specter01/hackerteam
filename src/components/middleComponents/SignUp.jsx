import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./SignUp.scss";

export default function SignUp() {
  const navigator = useNavigate();
  const INITIAL = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    repeatPassword: "",
    passwordCheck: true,
  };
  const [logIn, setLogIn] = useState(INITIAL);

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

    if (logIn.password === logIn.repeatPassword && logIn.password.length > 5) {
      setLogIn((prev) => (prev = { ...prev, passwordCheck: true }));

      // fetch on POST => save new User from Form

      fetch("https://hackerteamserver.onrender.com/users", {
        method: "POST",
        body: JSON.stringify(logIn),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          alert(
            "Congratulations, you are one step closer to becoming a better WebDeveloper!!! Welcome to our world, you Nerd!!! 🥳 🥳 🥳"
          );
          // on Past set setLogIn to initial and go to the login Page
          setLogIn((prev) => (prev = INITIAL));
          navigator("/my/login");
        });
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
