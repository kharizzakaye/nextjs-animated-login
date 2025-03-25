"use client";

import React, { useState } from "react";
import styles from "./login-component-2.module.css";

export default function Page() {

  // Define state to track the current animation
  const [animation, setAnimation] = useState("");

  const handleSignUpClick = () => {
    setAnimation("animated-signin"); // Add 'animated-signin' class
  };

  const handleSignInClick = () => {
    setAnimation("animated-signup"); // Add 'animated-signup' class
  };

  return (
    <div className={`${styles.localWrapper}`}>
      <div className={`${styles.localHtml} `}>

        <div className={`wrapper relative w-[35rem] h-[50rem] ${animation}`}>

          <div className={`${styles.formContainer} form-container sign-up`}>
            <form action="#">
              <h2 className={`${styles.cardTitle}`}>sign up</h2>

              <div className="form-group">
                <input type="text" required/>
                {/* <FontAwesomeIcon icon={faUser} /> */}
                <label>username</label>
              </div>
              
              <div className="form-group">
                <input type="email" required/>
                {/* <i className="fas fa-at"></i> */}
                <label>email</label>
              </div>

              <div className="form-group">
                <input type="password" required/>
                {/* <i className="fas fa-lock"></i> */}
                <label>password</label>
              </div>

              <div className="form-group">
                <input type="password" required/>
                {/* <i className="fas fa-lock"></i> */}
                <label>confirm password</label>
              </div>

              <button type="submit" className="btn">sign up</button>

              <div className="link">
                <p>You already have an account?<a href="#" className="signin-link" onClick={handleSignInClick}> sign in</a></p>
              </div>
            </form>
          </div>

          <div className={`${styles.formContainer} form-container sign-in`}>
            <form action="#">
              <h2 className={`${styles.cardTitle}`}>login</h2>

              <div className="form-group">
                <input type="text" required/>
                {/* <FontAwesomeIcon icon={faUser} className="icons"/> */}
                <label>username</label>
              </div>

              <div className="form-group">
                <input type="password" required/>
                {/* <i className="fas fa-lock"></i> */}
                <label>password</label>
              </div>

              <div className="forgot-pass">
                <a href="#">forgot password?</a>
              </div>

              <button type="submit" className="btn">login</button>

              <div className="link">
                <p>Don&apos;t have an account?<a href="#" className="signup-link" onClick={handleSignUpClick}> sign up</a></p>
              </div>
            </form>
          </div>

          </div>

      </div>
    </div>
  );
};