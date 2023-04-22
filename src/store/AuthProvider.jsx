import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase";

const AuthContext = createContext({
    user: null,
})

function AuthProvider() {
    const [user, setUser] = useState(null)

    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          // ...
          setUser(user)
        } else {
          // User is signed out
          // ...
          
        }
      });
    }, [])
  return (
    // <AuthContext.Provider></AuthContext.Provider>>
    <div></div>
  );
}

export default AuthProvider