import { useState } from "react";
import "./Login.css";
import { assets } from "../../assets/assets";

const Login = ({ setShowLogin }) => {
  const [curState, setCurState] = useState("SIGN-UP");

  return (
    <div className="login">
      <form className="login-container">
        <div className="login-title">
          <h2>{curState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>

        <div className="login-input">
          {curState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="your name" required />
          )}
          <input type="email" placeholder="your email" required />
          <input type="password" placeholder="your password" required />
        </div>
        <button>{curState === "Sign up" ? "Create Account" : "Login"}</button>

        <div className="login-condition">
          <input type="checkbox" required />
          <p>By continuing,i agree to the term of use & privacy policy</p>
        </div>

        {curState === "login" ? (
          <p>
            Create new account?{" "}
            <span onClick={() => setCurState("sign up")}>click here</span>
          </p>
        ) : (
          <p>
            Already have an account{" "}
            <span onClick={() => setCurState("login")}>Login Here?</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
