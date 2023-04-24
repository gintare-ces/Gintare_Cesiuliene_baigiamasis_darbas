import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuthCtx } from "../../store/AuthProvider";
import LogoutForm from "../auth/LogoutForm";

function Header() {
  const { isLoggedIn } = useAuthCtx();
  return (
    <header className="pt-6">
      <div className="md:px-10 relative flex w-full flex-wrap items-center justify-between ">
        <Link to={"/"} className="p-2 py-2 text-2xl font-roboto text-white  font-bold">
          <i
            className="fa fa-envira bg-clip-text bg-gradient-to-r from-cyan-600 hover:border-b-4 hover:border-fuchsia-700 text-transparent"
            aria-hidden="true"
          ></i>
          SHOP
        </Link>
        <nav className="pl-6">
          {isLoggedIn && (
            <>
              <NavLink
                to={"/shops"}
                className="px-5 py-2 text-xl font-roboto text-white hover:border-b-4 hover:border-fuchsia-700 font-bold"
              >
                Shops
              </NavLink>
              <NavLink
                to={"/shops/add"}
                className="px-5 py-2 text-xl font-roboto text-white hover:border-b-4 hover:border-fuchsia-700 font-bold"
              >
                Add Shop
              </NavLink>
              <NavLink>
                <LogoutForm />
              </NavLink>
            </>
          )}
          {!isLoggedIn && (
            <NavLink
              to={"/login"}
              className="px-5 py-2 text-xl font-roboto text-white hover:border-b-4 hover:border-fuchsia-700 font-bold"
            >
              Login
            </NavLink>
          )}
          {!isLoggedIn && (
            <NavLink
              to={"/register"}
              className="px-5 py-2 text-xl font-roboto text-white hover:border-b-4 hover:border-fuchsia-700 font-bold"
            >
              Register
            </NavLink>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
