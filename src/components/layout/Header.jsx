import React from 'react'
import {Link, NavLink} from "react-router-dom";
import { useAuthCtx } from '../../store/AuthProvider';
import LogoutForm from '../auth/LogoutForm';

function Header() {
  const { isLoggedIn } = useAuthCtx()
  return (
    <header  className='bg-neutral-800 dark:bg-neutral-900'>
        <div className='px-8 relative flex w-full flex-wrap items-center justify-between '>
            <Link to={'/'} className='p-2 py-2 text-2xl font-roboto text-white  font-bold' ><span className='text-fuchsia-600 text-2xl'>S</span>hop</Link>
            <nav className='pl-6'>
              {isLoggedIn &&
                <>
                <NavLink to={'/shops'} className='px-4 py-4 text-xl font-roboto text-white hover:bg-fuchsia-700 '   >Shops</NavLink>
                <NavLink to={'/shops/add'} className='px-4 py-4 text-xl font-roboto text-white hover:bg-fuchsia-700' >Add Shop</NavLink>
                <NavLink >
                  <LogoutForm />
                </NavLink>
                </>
              }
              {!isLoggedIn && 
                <NavLink to={'/login'} className='px-4 py-4 text-xl font-roboto text-white hover:bg-fuchsia-700' >Login</NavLink>
              }
              {!isLoggedIn && 
                <NavLink to={'/register'} className='px-4 py-4 text-xl font-roboto text-white hover:bg-fuchsia-700' >Register</NavLink>
              }
            </nav>

        </div>
    </header>
  )
}

export default Header