import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="">
        <div className="navbar bg-base-100 px-5 md:px-20 ">
          <div className="navbar-start ">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-auto"
              >
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link>My reviews</Link>
                </li>
                <li>
                  <Link>Add service</Link>
                </li>
                <li>
                  <Link>Login</Link>
                </li>
                <li>
                  <Link>Register</Link>
                </li>
                <li>
                  <Link>Logout</Link>
                </li>
                <li>
                  <Link>Blog</Link>
                </li>
              </ul>
            </div>
            <div className="hidden md:flex items-center gap-1">
              <Link to="/">
                <img src="" alt="" className="w-16 h-10" />
              </Link>
              <Link
                to="/"
                className="text-2xl font-bold text-orange-400 font-[Poppins]"
              >
                Ranna Ghor
              </Link>
            </div>
          </div>

          <div className="navbar-end mr-4">
            <ul className="menu menu-horizontal px-5 hidden md:flex">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link>My reviews</Link>
              </li>
              <li>
                <Link>Add service</Link>
              </li>
              <li>
                <Link>Login</Link>
              </li>
              <li>
                <Link>Register</Link>
              </li>
              <li>
                <Link>Logout</Link>
              </li>
              <li>
                <Link>Blog</Link>
              </li>
            </ul>
          </div>

          {/* user avater */}
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar tooltip tooltip-left"
            >
              <div className="w-full rounded-full ">
                <img src="" alt="" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link className="justify-between">
                  {" "}
                  Profile<span className="badge">New</span>
                </Link>
              </li>
              <li>
                <Link>Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
