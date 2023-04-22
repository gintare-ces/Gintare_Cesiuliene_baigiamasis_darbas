import React from "react";
import LoginForm from "../components/auth/LoginForm";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuthCtx } from "../store/AuthProvider";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate()
  const { login } = useAuthCtx()
  function loginUser({ email, password }) {
    console.log('{ email, password } ===', { email, password });
    // email, password 
 
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log('login success', user);
        login(user);
        navigate('/shops')
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
