import React from 'react'
import { useAuthCtx } from '../../store/AuthProvider'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase/firebase'

function LogoutForm() {
  const { logout, isLoggedIn } = useAuthCtx()

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
  return !isLoggedIn ? null : <button onClick={logoutUser} className='inline-block rounded-full p-1  border-fuchsia-600 border-2'><i className="fa fa-sign-out text-white hover:text-fuchsia-600 sm:text-lg md:text-xl" aria-hidden="true"></i></button>
}

export default LogoutForm