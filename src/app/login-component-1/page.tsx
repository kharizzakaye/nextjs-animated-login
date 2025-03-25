"use client";

import SocialIconsSection from "../components/SocialIconsSection";
import styles from "./login-component-1.module.css"

export default function Page() {
  const handleRegisterClick = () => {
    const container = document.getElementById("container");
    if (container) {
      container.classList.add("active");
    }
  };

  const handleLoginClick = () => {
    const container = document.getElementById("container");
    if (container) {
      container.classList.remove("active");
    }
  };

  return (
    <div
      className="
        m-0 p-0 box-border
        bg-gradient-to-r from-[#e2e2e2] to-[#c9d6ff] flex items-center justify-center flex-col h-screen"
    >
      <div className="container bg-white rounded-[30px] shadow-lg relative overflow-hidden w-[768px] max-w-full min-h-[480px]" id="container">
        {/* create account container */}
        <div className={`${styles.formContainer} signUp`}>
          <form>
            <h1 className={`${styles.cardTitle}`}>Create Account</h1>

            <SocialIconsSection />

            <span>or use your email for registration</span>

            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />

            <button>Sign Up</button>
          </form>
        </div>

        {/* login container */}
        <div className={`${styles.formContainer} signIn`}>
          <form>
            <h1 className={`${styles.cardTitle}`}>Sign in</h1>

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
            <div className="togglePanel toggleLeft">
              <h1 className={`${styles.cardTitle}`}>Welcome back!</h1>

              <p>Enter your personal details to use all of the site features</p>

              <button className="hiddenButton" id="login" onClick={handleLoginClick}>
                Sign in
              </button>
            </div>

            {/* right toggle */}
            <div className="togglePanel toggleRight">
              <h1 className={`${styles.cardTitle}`}>Hi there!</h1>

              <p>Register with your personal details to use our website</p>

              <button className="hiddenButton" id="register" onClick={handleRegisterClick}>
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
