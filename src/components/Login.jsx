import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Button } from "@mui/material";
import '../css/Login.css'

const Login = () => {
  return (
    <div className="login">
      <div className="img__wrapper">
        <img className="login__background--img" src="https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png" alt="" />
      </div>
      <div className="login__rightSide">
        <TwitterIcon />
        <h1 className="login__title">Happening now</h1>
        <h2 className="login__sub-title">Join Twitter Today</h2>
        <Button className="login__btn">Sign in with Google</Button>
      </div>
    </div>
  );
};

export default Login;
