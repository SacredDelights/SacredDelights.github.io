import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
const logo = require("../../../src/images/header-logo.jpg");

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [className, setClassName] = useState<string>("icon-menu");
  const resetMenu = () => {
    setMenuOpen(false);
    setClassName("icon-menu");
  };
  return (
    <div className={"header-wrap bg-black"}>
      <header className="">
        <nav className={"flex items-start justify-between"}>
          <div className={"items-center logo-nav"}>
            <Link className={"title text-primary"} to={"/"} onClick={resetMenu}>
              <img
                alt="Sacred Delights Logo"
                src={String(logo)}
                className={"w-[8rem] p-[10px]"}
              />
            </Link>
            <div className={menuOpen ? "main-nav pb-4 open" : "main-nav"}>
              <ul className="">
                <li>
                  <NavLink to={"/"} onClick={resetMenu}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/story"} onClick={resetMenu}>
                    Story
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/portfolio"} onClick={resetMenu}>
                    Portfolio
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/about"} onClick={resetMenu}>
                    About us
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/contact"} onClick={resetMenu}>
                    Contact us
                  </NavLink>
                </li>
                <li>
                  <div className="flex items-center">
                    <span>Menus</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className="size-4 fill-gray-400"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>

                  <ul className={"sub-menu"}>
                    <li>
                      <NavLink to={"/menus/Merengue"} onClick={resetMenu}>
                        Merengue Rolls
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={"/menus/menu"} onClick={resetMenu}>
                        Menu2
                      </NavLink>
                    </li>
                  </ul>
                </li>

                <li>
                  <NavLink to={"/request"} onClick={resetMenu}>
                    Request order
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="px-2 py-[34px]">
            <div
              className={className}
              onClick={() => {
                setMenuOpen(!menuOpen);
                setClassName(!menuOpen ? "icon-menu active pb-4" : "icon-menu");
              }}
            >
              <span></span>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};
