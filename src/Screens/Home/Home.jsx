import Button from "@mui/material/Button";
import "./Home.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { signUp, logIn } from "../../Service/Firebase";

export function Home({ isSignUp }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const handleClickSignIn = async (e) => {
    e.preventDefault();

    try {
      if (isSignUp) {
        await signUp(email, pass);
      } else {
        await logIn(email, pass);
      }
      setEmail("");
      setPass("");
    } catch (e) {
      setError(e.message);
      setPass("");
    }
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePass = (e) => {
    setPass(e.target.value);
  };

  return (
    <>
      <h3 className="Home-heading">{isSignUp ? "Sign Up" : "Sign In"}</h3>

      <form onSubmit={handleClickSignIn}>
        <div className="Form-auth-block">
          <input
            className="Input-login"
            type="email"
            value={email}
            onChange={onChangeEmail}
            placeholder="Your login here..."
          />
          <input
            className="Input-pass"
            type="password"
            value={pass}
            onChange={onChangePass}
            placeholder="Your password here..."
          />

          <div className="Signin-btn-box">
            <Button
              className="Signin-btn"
              variant="contained"
              onClick={handleClickSignIn}
            >
              Sign In
            </Button>
          </div>
        </div>
      </form>
      {error && <h4>{error}</h4>}

      <Link to={isSignUp ? "/" : "/signup"}>
        {isSignUp ? "Sign In" : "Sign Up"}
      </Link>
    </>
  );
}

export default Home;
