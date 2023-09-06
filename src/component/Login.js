import React, { useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

const Login = () => {
  const [signUp, setSignUp] = useState(false);
  console.log(signUp);
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
            className="p-2 bg-gray-800"
            type="text"
            placeholder="Email or phone number"
          />
          {!signUp ? (
            <input
              className="p-2 bg-gray-900"
              type="password"
              placeholder="password"
            />
          ) : (
            <>
              <input
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
          <button className="bg-red-700 p-2">{!signUp ? "Sign In" : "Register"}</button>
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
