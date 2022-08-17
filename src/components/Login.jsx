import React, { useEffect } from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Button } from "@mui/material";
import "../css/Login.css";
import { auth, provider } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
    selectUserName,
    selectUserPhoto,
    selectUserUsername,
    setSignOutState,
    setUserLoginDetails,
  } from "../features/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  const userUsername = useSelector(selectUserUsername)

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
        if(user) {
            setUser(user)
            navigate("/home")
        }
    })
  }, [userName])

  const handleAuth = () => {
    if(!userName) {

        auth
        .signInWithPopup(provider)
        .then((res) => {
            setUser(res.user)
        })
        .catch((err) => {
            alert(err.message);
        });
    } else if (userName) {
        auth.signOut().then(() => {
            dispatch(setSignOutState())
            navigate("/")
        }).catch(err => alert(err.message))
    }
  };

  const setUser = (user) => {
    dispatch(
        setUserLoginDetails({
            name: user.displayName,
            username: user.email,
            photo: user.photoURL
        })
    )
  }

  return (
    <div className="login">
      <div className="login__leftSide">
        <img
          className="login__background--img"
          src="https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png"
          alt=""
        />
        <TwitterIcon />
      </div>
      <div className="login__rightSide">
        <TwitterIcon />
        <h1 className="login__title">Happening now</h1>
        <h2 className="login__sub-title">Join Twitter Today</h2>
        <Button onClick={handleAuth} className="login__btn">
          Sign in with Google
        </Button>
      </div>
    </div>
  );
};

export default Login;
