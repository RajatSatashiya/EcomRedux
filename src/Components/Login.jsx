import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {loginUser} from "../Redux/actions";
import {useDispatch, useSelector} from "react-redux";

import React from "react";

function Login() {
  const history = useNavigate();
  const state = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const loginFunction = async ({ email, password }) => {
    try {
      const res = await fetch("https://reqres.in/api/login", {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
        }),
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      });

      const data = await res.json();
      dispatch(loginUser(data.token));
      data.token && history("/");
    } catch (e) {
      console.log("Error:" + e);
    }
  };

  const formHandle = (e) => {
    e.preventDefault();

    const data = {
      email: emailInputRef.current.value,
      password: passwordInputRef.current.value,
    };

    loginFunction(data);
  };

  useEffect(() => {
    if (state.isAuth) {
      history("/");
    } else {
      history("/login");
    }
  }, []);

  return (
    <>
      <form onSubmit={formHandle}>
        <label htmlFor="email">Email:</label> <br />
        <input type="email" name="email" ref={emailInputRef} /> <br />
        <label htmlFor="password">Password:</label> <br />
        <input type="password" name="password" ref={passwordInputRef} />
        <br />
        <input type="submit" />
      </form>
    </>
  );
}

export default Login;
