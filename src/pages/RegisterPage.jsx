import React from "react";
import RegisterForm from "../components/auth/RegisterForm";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useAuthCtx } from "../store/AuthProvider";
import { toast } from "react-hot-toast";

function RegisterPage() {
  const { register } = useAuthCtx()
  function registerUser({ email, password }) {
    console.log('{ email, password} ===', { email, password});
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log('user ===', user);
        register(user)
        toast.success('Successfully registered')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('errorMessage ===', errorMessage);
        // ..
        toast.error('Something happened, try again later');
      });

  }
  return (
    <div className="container mx-auto">
      <h1>Register Page</h1>
      <RegisterForm onRegister={registerUser} />
    </div>
  );
}

export default RegisterPage;
