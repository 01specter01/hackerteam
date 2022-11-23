import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./SignUp.scss";

export default function LogIn() {
  const navigator = useNavigate();
  const INITIAL = {
    email: "",
    password: "",
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

      alert(
        "Congratulations, you are one step closer to becoming a better WebDeveloper!!! Welcome to our world, you Nerd!!! 🥳 🥳 🥳"
      );
      setLogIn((prev) => (prev = INITIAL));
      navigator("/root/react");
    } else {
      setLogIn((prev) => (prev = { ...prev, passwordCheck: false }));
    }
  };

  return (
    <section className="logIn">
      <div className="signIn">
        <h1>Become a Hacker with us!!</h1>

        <form className="form" onSubmit={handleSubmit}>
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

          <button>LogIn</button>
        </form>
      </div>
    </section>
  );
}
