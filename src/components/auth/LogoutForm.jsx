import React from 'react'
import { useAuthCtx } from '../../store/AuthProvider'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase/firebase'

function LogoutForm() {
  const { logout } = useAuthCtx()

  function logoutUser() {
    signOut(auth)
        .then(() => {
            // Sign-out successful.
            logout();
        })
        .catch((error) => {
            // An error happened.
          });
  }
  return <button onClick={logoutUser}>Logout</button>
}

export default LogoutForm