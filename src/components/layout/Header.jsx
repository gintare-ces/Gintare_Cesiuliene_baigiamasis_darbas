import React from 'react'
import {Link, NavLink} from "react-router-dom";

function Header() {
  const isLoggedIn = false
  return (
    <header  className='bg-neutral-800 dark:bg-neutral-900'>
        <div className='container mx-auto relative flex w-full flex-wrap items-center justify-between '>
            <Link to={'/shops'} className='px-2 py-2 text-xl font-roboto text-white  font-bold' ><span className='text-fuchsia-600 text-4xl'>S</span>hop</Link>
            <nav className='pl-6'>
              {isLoggedIn &&
                <NavLink to={'/shops'} className='px-4 py-4 text-xl font-roboto text-white hover:bg-fuchsia-700 '  >Shops</NavLink>
              }
              {isLoggedIn &&
                <NavLink to={'/shops/add'} className='px-4 py-4 text-xl font-roboto text-white hover:bg-fuchsia-700' >Add Shop</NavLink>
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