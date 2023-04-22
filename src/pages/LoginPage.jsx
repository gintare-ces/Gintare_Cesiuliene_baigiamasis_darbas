import React from "react";
import LoginForm from "../components/auth/LoginForm";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function LoginPage() {
  function loginUser({ email, password }) {
    console.log('{ email, password } ===', { email, password });
    // email, password
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log('user ===', user);
        console.log('login success');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.warn('login failed', errorMessage);
      });
  }
  return (
    <div className="container mx-auto">
      <h1>Login here</h1>
      <LoginForm onLogin={loginUser} />
    </div>
  );
}

export default LoginPage;
