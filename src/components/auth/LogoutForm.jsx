import React from "react";
import { useAuthCtx } from "../../store/AuthProvider";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";

function LogoutForm() {
  const navigate = useNavigate();
  const { logout, isLoggedIn } = useAuthCtx();

  function logoutUser() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        logout();
        navigate("/login");
      })
      .catch((error) => {
        // An error happened.
      });
  }
  return !isLoggedIn ? null : (
    <button
      onClick={logoutUser}
      className="inline-block py-.1 px-4 rounded-full  border-fuchsia-600 border-2 shadow-fuchsia-700 shadow-inner"
    >
      <i
        className="fa fa-sign-out text-white hover:text-fuchsia-600 sm:text-lg md:text-xl"
        aria-hidden="true"
      ></i>
    </button>
  );
}

export default LogoutForm;
