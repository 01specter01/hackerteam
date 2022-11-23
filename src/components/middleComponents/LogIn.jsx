import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

import "./SignUp.scss";

export default function LogIn() {
  const [search, setLogged] = useOutletContext();
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

    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((json) => {
        if (
          json.filter(
            (el) => el.email === logIn.email && el.password === logIn.password
          ).length
        ) {
          const user = json.find(
            (el) => el.email === logIn.email && el.password === logIn.password
          );
          localStorage.setItem("user", JSON.stringify(user.firstName));
          setLogged(user.firstName);
          setLogIn(INITIAL);
          navigator("/my/react");
        } else {
          alert("Wrong Data");
        }
      });
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
