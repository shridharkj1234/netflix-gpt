import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineLogout } from "react-icons/ai";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/frebase";
import { userLoggedIn, userLoggedOut } from "../utils/slices/userSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { loggedInUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //restrict the path only authenticated user can see
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, displayName } = user;
        dispatch(userLoggedIn({ email, displayName }));
        navigate("/browse");
      } else {
        navigate("/");
      }
    });
  }, []);
  const handleSignedOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(userLoggedOut());
      })
      .catch((error) => {
        //Error Handling if Not Signed Out
      });
  };
  return (
    <div className="w-screen flex justify-between  absolute z-10 px-12 py-4 bg-gradient-to-b from-black text-white">
      <img
        className="w-48"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {loggedInUser && (
        <div className="self-center">
          <p className="flex  self-center">
            {" "}
            <span className="text-xl font-extrabold inline-block bg-red-700 px-3 py-1 rounded-full cursor-pointer">
              {" "}
              {loggedInUser.displayName.charAt(0)}
            </span>{" "}
            &nbsp;{" "}
            <span className="inline-block self-center">
              {" "}
              {loggedInUser.displayName}
            </span>{" "}
            &nbsp;{" "}
            <span
              className="inline-block self-center text-lg cursor-pointer px-3 py-2 rounded-full hover:bg-red-500"
              onClick={handleSignedOut}
            >
              <AiOutlineLogout />{" "}
            </span>{" "}
          </p>
        </div>
      )}
    </div>
  );
};

export default Header;
