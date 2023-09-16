import React, { useRef, useState } from "react";
import Header from "./Header";
import { Link, useNavigate } from "react-router-dom";
import { formValidaion } from "../utils/validation";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/frebase";
import { useDispatch } from "react-redux";
import { userLoggedIn } from "../utils/slices/userSlice";

const Login = () => {
  const [signUp, setSignUp] = useState(false);
  const [isSiginSuccessFull, setIsSignInSuccessFull] = useState(null);
  const email = useRef();
  const password = useRef();
  const fullName = useRef();

  // Logged In Logic and Navigate to Browse Page
  const dispatch=useDispatch();
  const navigate = useNavigate();
  //Sign In and Sign Up Logic 
  const handleSignIn = (event) => {
    event.preventDefault();
    const validationFailed = formValidaion(
      email.current.value,
      password.current.value,
    );
    setIsSignInSuccessFull(validationFailed);

    if (validationFailed) return;

    if (signUp) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed Up Logic
          updateProfile(auth.currentUser,{
            displayName: fullName.current.value
          }).then(()=>{
            const user = userCredential.user;
            const {email, displayName} = user
            dispatch(userLoggedIn({ email, displayName}))
            navigate("/browse");
            console.log(user);
          })
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setIsSignInSuccessFull(errorCode + " - " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth,  email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in
          const user= userCredential.user;
          const {email, displayName}  = user;
          if(user) {
            dispatch(userLoggedIn({ email, displayName}))
            navigate("/browse");
          }
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setIsSignInSuccessFull("User Not Found !!! Please Register")
        });
    }
  };
  return (
    <div>
      <Header />
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <div className="text-white absolute top-1/3 left-1/3 w-1/2">
        <form className="mx-10 px-12 py-16 flex flex-col w-1/2 bg-black opacity-90 gap-5">
          <label className=" text-3xl">{!signUp ? "Sign In" : "Sign Up"}</label>
          <input
            ref={email}
            className="p-2 bg-gray-800"
            type="text"
            placeholder="Email or phone number"
          />
          {!signUp ? (
            <input
              ref={password}
              className="p-2 bg-gray-900"
              type="password"
              placeholder="password"
            />
          ) : (
            <>
              <input
                ref={fullName}
                className="p-2 bg-gray-900"
                type="text"
                placeholder="Enter Full Name"
              />
              <input
                ref={password}
                className="p-2 bg-gray-900"
                type="password"
                placeholder="New Password"
              />
              <input
                className="p-2 bg-gray-900"
                type="password"
                placeholder="Confirm Password"
              />
            </>
          )}
          <button onClick={handleSignIn} className="bg-red-700 p-2">
            {!signUp ? "Sign In" : "Register"}
          </button>
          {isSiginSuccessFull !== null && (
            <p className="text-red-600">Email or PassWord is Not valid </p>
          )}
          <div className="flex justify-between text-sm">
            <label>Remember me</label>
            <label>Not you ?</label>
          </div>
          <p className="text-gray-700 font-bold text-sm">
            {!signUp ? "New to Netflix ? " : "Already Register ? "}
            <Link
              href="/login"
              className="text-white"
              onClick={() => setSignUp(!signUp)}
            >
              {!signUp ? "Sign Up Now " : "  Sign In"}
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
