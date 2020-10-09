import React from "react";

const Signin = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    hangleLogin,
    handleSigup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props;

  return (
    <section className="Signin">
      <div className="SigninContainer">
        <label>Username</label>
        <input
          type="text"
          autoFocus
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="errorMsg">{emailError}</p>
        <label>Password</label>
        <input
          type="password"
          autoFocus
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="errorMsg">{passwordError}</p>
        <button className="btnContainer">
          {hasAccount ? (
            <>
              <button onClick={hangleLogin}>Sign in</button>
              <p>
                Don't have an account ?
                <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span>
              </p>
            </>
          ) : (
            <>
              <button onClick={handleSigup}>Sign up</button>
              <p>
                Don't have an account ?{" "}
                <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span>
              </p>
            </>
          )}
        </button>
      </div>
    </section>
  );
};

export default Signin;
