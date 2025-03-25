"use client";

import { useEffect } from "react";
import SocialIconsSection from "../components/SocialIconsSection";

export default function Page() {

  useEffect(() => {
    const container = document.getElementById("container");
    const registerBtn = document.getElementById("register");
    const loginBtn = document.getElementById("login");

    if (registerBtn && loginBtn && container) {
      registerBtn.addEventListener("click", () => {
        container.classList.add("active");
      });

      loginBtn.addEventListener("click", () => {
        container.classList.remove("active");
      });
    }

    // Cleanup event listeners when component unmounts
    return () => {
      if (registerBtn) registerBtn.removeEventListener("click", () => {});
      if (loginBtn) loginBtn.removeEventListener("click", () => {});
    };
  }, []);


  return (
    <div 
      className="
        m-0 p-0 box-border
        bg-gradient-to-r from-[#e2e2e2] to-[#c9d6ff] flex items-center justify-center flex-col h-screen"
      >
      <div className="container" id="container">
        {/* create account container */}
        <div className="formContainer signUp">
          <form>
            <h1>Create Account</h1>

            <SocialIconsSection />

            <span>or use your email for registration</span>

            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />

            <button>Sign Up</button>
          </form>
        </div>

        {/* login container */}
        <div className="formContainer signIn">
          <form>
            <h1>Sign in</h1>

            <SocialIconsSection />

            <span>or use your password</span>

            <span>or use your email password</span>

            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#">Forget Your Password?</a>

            <button>Sign In</button>
          </form>
        </div>

        {/* toggler container */}
        <div className="toggleContainer">
          <div className="toggle">
            {/* left toggle */}
            <div className= "togglePanel toggleLeft">
              <h1>Welcome back!</h1>

              <p>Enter your personal details to use all of the site features</p>

              <button className="hiddenButton" id="login">Sign in</button>
            </div>

            {/* right toggle */}
            <div className="togglePanel toggleRight">
              <h1 >Hi there!</h1>

              <p>Register with your personal details to use our website</p>

              <button className="hiddenButton" id="register">Sign up</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
