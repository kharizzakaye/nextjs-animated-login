"use client";

import React, { useState } from "react";
import styles from "./login-component-2.module.css";
import clsx from "clsx";

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
          <div className={clsx(
            `${styles.formContainer} rotate-6 form-container sign-up`,
            {
              [styles.animatedSignInOnSignUpCard] : animation == "animated-signin",
              [styles.animatedSignUpOnSignUpCard] : animation == "animated-signup",
            }
          )}>
            <form action="#">
              <h2 className={`${styles.cardTitle}`}>sign up</h2>

              <div className={`${styles.formGroup} form-group`}>
                <input
                  type="text"
                  required
                  className={`${styles.inputFields}`}
                />
                {/* <FontAwesomeIcon icon={faUser} /> */}
                <label className={`${styles.fieldLabel}`}>username</label>
              </div>

              <div className={`${styles.formGroup} form-group`}>
                <input
                  type="email"
                  required
                  className={`${styles.inputFields}`}
                />
                {/* <i className="fas fa-at"></i> */}
                <label className={`${styles.fieldLabel}`}>email</label>
              </div>

              <div className={`${styles.formGroup} form-group`}>
                <input
                  type="password"
                  required
                  className={`${styles.inputFields}`}
                />
                {/* <i className="fas fa-lock"></i> */}
                <label className={`${styles.fieldLabel}`}>password</label>
              </div>

              <div className={`${styles.formGroup} form-group`}>
                <input
                  type="password"
                  required
                  className={`${styles.inputFields}`}
                />
                {/* <i className="fas fa-lock"></i> */}
                <label className={`${styles.fieldLabel}`}>
                  confirm password
                </label>
              </div>

              <button type="submit" className={`${styles.buttons} btn`}>
                sign up
              </button>

              <div className={`link text-center text-[1.4rem] text-[var(--labelColor)] my-10`}>
                <p>
                  You already have an account?
                  <a
                    href="#"
                    className="signin-link  capitalize text-[var(--mainColor)] no-underline font-semibold transition-all duration-500 ease-in-out hover:text-[#da4453]"
                    onClick={handleSignInClick}
                  >
                    {" "}
                    sign in
                  </a>
                </p>
              </div>
            </form>
          </div>

          <div className={clsx(
            `${styles.formContainer} form-container sign-in`,
            {
              [styles.animatedSignInOnSignInCard] : animation == "animated-signin",
              [styles.animatedSignUpOnSignInCard] : animation == "animated-signup",
            }
          )}>
            <form action="#">
              <h2 className={`${styles.cardTitle}`}>login</h2>

              <div className={`${styles.formGroup} form-group`}>
                <input
                  type="text"
                  required
                  className={`${styles.inputFields}`}
                />
                {/* <FontAwesomeIcon icon={faUser} className="icons"/> */}
                <label className={`${styles.fieldLabel}`}>username</label>
              </div>

              <div className={`${styles.formGroup} form-group`}>
                <input
                  type="password"
                  required
                  className={`${styles.inputFields}`}
                />
                {/* <i className="fas fa-lock"></i> */}
                <label className={`${styles.fieldLabel}`}>password</label>
              </div>

              <div className="forgot-pass my-6 -mt-6">
                <a
                  href="#"
                  className="text-[var(--labelColor)] no-underline text-[1.4rem] capitalize transition-all duration-500 ease-in-out hover:text-[var(--mainColor)]"
                >
                  forgot password?
                </a>
              </div>

              <button type="submit" className={`${styles.buttons} btn`}>
                login
              </button>

              <div className={`link text-center text-[1.4rem] text-[var(--labelColor)] my-10`}>
                <p>
                  Don&apos;t have an account?
                  <a
                    href="#"
                    className="signup-link capitalize text-[var(--mainColor)] no-underline font-semibold transition-all duration-500 ease-in-out hover:text-[#da4453]"
                    onClick={handleSignUpClick}
                  >
                    {" "}
                    sign up
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
