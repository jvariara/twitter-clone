import React from "react";
import "../css/SidebarOption.css";
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

function SidebarOption({ text, Icon }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  const userUsername = useSelector(selectUserUsername);

  const signOutUser = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(setSignOutState());
        navigate("/");
      })
      .catch((err) => alert(err.message));
  };

  return (
    <button onClick={signOutUser} className={`sidebarOption`}>
      <Icon />
      <h2>{text}</h2>
    </button>
  );
}

export default SidebarOption;
