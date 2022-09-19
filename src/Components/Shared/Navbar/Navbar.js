import React, { useState } from "react";
import { ImPhone } from "react-icons/im";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { HashLink } from "react-router-hash-link";
// import logo from "../../../Assets/logo.png";

const Navbar = () => {
  const [state, setState] = useState(false);

  // Replace javascript:void(0) path with your path
  const navigation = [
    { title: "Home", path: "/home#home" },
    { title: "Gallery", path: "/gallery" },
    { title: "Service", path: "/home#service" },
    { title: "About", path: "/home#about" },
    { title: "Contact", path: "/home#contact" },
  ];

  return (
    <nav className="c-bg navbar w-full border-b md:border-0 md:sticky top-0 left-0 z-[100]">
      <div className="c-display md:flex items-center">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link
            to="home"
            className=" text-[#e8dc36] text-3xl font-bold uppercase"
          >
            {/* <span>
              <img src={logo} alt="Logo" />
            </span>{" "} */}
            Saidur <span className="text-white text-sm">Tattoo</span>
          </Link>
          <div className="md:hidden">
            <button
              className="text-gray-200 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, index) => {
              return (
                <HashLink
                  key={index}
                  as={HashLink}
                  to={item.path}
                  scroll={(el) =>
                    el.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                  className="text-gray-200 text-lg block"
                >
                  {item.title}
                </HashLink>
              );
            })}
          </ul>
        </div>
        <div className="hidden md:inline-block md:flex items-center">
          <Link to="/home" className="rounded-full">
            <ImPhone className="text-[#e8dc36] text-3xl " />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
