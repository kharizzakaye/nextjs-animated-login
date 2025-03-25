"use client";

import Link from "next/link";
import SocialIconsSection from "./components/SocialIconsSection";
import styles from "./login-component-1.module.css";
import clsx from "clsx";
import { useState } from "react";

export default function Page() {
  // Declare state variable
  const [containerIsActive, setContainerIsActive] = useState<boolean>(false);
  
  // container.active == true
  const handleRegisterClick = () => {
    const container = document.getElementById("container");
    if (container) {
      container.classList.add("active");
      setContainerIsActive(true);
    }
  };

  // container.active == false
  const handleLoginClick = () => {
    const container = document.getElementById("container");
    if (container) {
      container.classList.remove("active");
      setContainerIsActive(false);
    }
  };

  return (
    <div className="m-0 p-0 box-border bg-gradient-to-r from-[#e2e2e2] to-[#c9d6ff] flex items-center justify-center flex-col h-screen">
      <div
        className=" bg-white rounded-[30px] shadow-lg relative overflow-hidden w-[768px] max-w-full min-h-[480px]"
        id="container"
      >
        {/* create account container */}
        <div
          className={clsx(`${styles.formContainer} ${styles.signUp}`, {
            [styles.containerActiveSignUp]: containerIsActive, // .container.active .signIn
          })}
        >
          <form className="bg-white flex items-center justify-center flex-col px-10 h-full">
            <h1 className={`${styles.cardTitle}`}>Create Account</h1>

            <SocialIconsSection />

            <span className="text-xs">or use your email for registration</span>

            <input
              className={`${styles.inputField}`}
              type="text"
              placeholder="Name"
            />
            <input
              className={`${styles.inputField}`}
              type="email"
              placeholder="Email"
            />
            <input
              className={`${styles.inputField}`}
              type="password"
              placeholder="Password"
            />

            <button className={`${styles.buttons} bg-[#2da0a8]`}>
              Sign Up
            </button>
          </form>
        </div>

        {/* login container */}
        <div
          className={clsx(`${styles.formContainer} ${styles.signIn}`, {
            [styles.containerActiveSignIn]: containerIsActive, // .container.active .signUp
          })}
        >
          <form className="bg-white flex items-center justify-center flex-col px-10 h-full">
            <h1 className={`${styles.cardTitle}`}>Sign in</h1>

            <SocialIconsSection />

            <span className="text-xs">or use your password</span>

            <span className="text-xs">or use your email password</span>

            <input
              className={`${styles.inputField}`}
              type="email"
              placeholder="Email"
            />
            <input
              className={`${styles.inputField}`}
              type="password"
              placeholder="Password"
            />

            <Link
              href="#"
              className="text-gray-800 text-sm no-underline my-3 mt-[15px] mb-[10px]"
            >
              Forgot Password?
            </Link>

            <button className={`${styles.buttons} bg-[#2da0a8]`}>
              Sign In
            </button>
          </form>
        </div>

        {/* toggler container */}
        <div
          className={clsx(`${styles.toggleContainer}`, {
            [styles.containerActiveToggleContainer]: containerIsActive,
          })}
        >
          <div
            className={clsx(`${styles.toggle}`, {
              [styles.containerActiveToggle]: containerIsActive,
            })}
          >
            {/* left toggle */}
            <div
              className={clsx(`${styles.togglePanel} ${styles.toggleLeft}`, {
                [styles.containerActiveToggleLeft]: containerIsActive,
              })}
            >
              <h1 className={`${styles.cardTitle}`}>Welcome back!</h1>

              <p className={`${styles.cardText}`}>
                Enter your personal details to use all of the site features
              </p>

              <button
                className={`${styles.buttons} bg-transparent border border-white`}
                id="login"
                onClick={handleLoginClick}
              >
                Sign in
              </button>
            </div>

            {/* right toggle */}
            <div
              className={clsx(`${styles.togglePanel} ${styles.toggleRight}`, {
                [styles.containerActiveToggleRight]: containerIsActive,
              })}
            >
              <h1 className={`${styles.cardTitle}`}>Hi there!</h1>

              <p className={`${styles.cardText}`}>
                Register with your personal details to use our website
              </p>

              <button
                className={`${styles.buttons} bg-transparent border border-white`}
                id="register"
                onClick={handleRegisterClick}
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
