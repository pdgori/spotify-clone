import React from "react";
import "./Login.css";
import { loginUrl } from "../../spotify";

const Login = () => {
  return (
    <div className="login">
      <img
        src="https://berndvoss.com/wp-content/uploads/2018/10/spotify-transp-white-1.png"
        alt=""
      />
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
};

export default Login;
