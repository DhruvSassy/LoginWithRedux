import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const dispatch = useDispatch();

  const handlesubmit = (e) => {
    e.preventDefault();

    dispatch(
      login({
        name: name,
        email: email,
        password: pass,
        loggedIn: true,
      })
    );
  };

  return (
    <div className="login">
      <form className="login_form" onSubmit={(e) => handlesubmit(e)}>
        <h1>Login Here</h1>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <button className="submit_btn">Submit</button>
      </form>
    </div>
  );
};

export default Login;
