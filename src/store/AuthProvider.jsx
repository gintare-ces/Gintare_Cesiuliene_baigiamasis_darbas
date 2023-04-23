import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase";

const AuthContext = createContext({
    user: {},
    login() {},
    logout() {},
    register() {},
    isLoading: false,
})

AuthContext.displayName = 'AutentifikacijaCTX';

function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

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
          console.log('Logout user');
          setUser(null)
          
        }
      });
    }, [])
    const isLoggedIn = !!user

    function login(userObj) {
      setUser(userObj)
    }
    function register(newUObj) {
      setUser(newUObj)
    }
    function logout() {
      setUser(null)
    }

    const authCtx = {
      user,
      login,
      logout,
      register,
      isLoggedIn,
      isLoading,
    }
   
    return (
      <AuthContext.Provider value={authCtx}>{children}</AuthContext.Provider>
    );
}

export default AuthProvider

export function useAuthCtx() {
  return useContext(AuthContext)
}