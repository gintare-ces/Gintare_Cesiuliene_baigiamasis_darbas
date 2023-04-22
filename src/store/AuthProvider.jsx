import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase";

const AuthContext = createContext({
    user: {},
    login() {},
    logout() {},
})

AuthContext.displayName = 'AutentifikacijaCTX';

function AuthProvider({ children }) {
    const [user, setUser] = useState(null)

    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          // ...
          console.log('prisijungimas', user.email);
          setUser(user)
        } else {
          // User is signed out
          // ...
          
        }
      });
    }, [])
    const isLoggedIn = !!user

    function login(userObj) {
      setUser(userObj)
    }
    function logout() {
      setUser(null)
    }

    const authCtx = {
      user,
      login,
      logout,
      isLoggedIn,
    }
   
    return (
      <AuthContext.Provider value={authCtx}>{children}</AuthContext.Provider>
    );
}

export default AuthProvider

export function useAuthCtx() {
  return useContext(AuthContext)
}