import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
const logo = require("../../../src/images/header-logo.jpg");

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [className, setClassName] = useState<string>("icon-menu");
  return (
    <div
      className={
        "header-wrap bg-black shadow-[0_2px_0_0_rgba(255,255,255,0.2)]"
      }
    >
      <header>
        <nav className={"flex items-start justify-between"}>
          <div className={"items-center logo-nav"}>
            <Link className={"title text-primary"} to={"/"}>
              <img
                alt="Sacred Delights Logo"
                src={String(logo)}
                className={"w-[8rem] lg:w-[11rem] p-[10px]"}
              />
            </Link>
            <div className={menuOpen ? "main-nav open pb-4" : "main-nav"}>
              <ul className="">
                <li>
                  <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={"/br/story"}>Story</NavLink>
                </li>
                <li>
                  <NavLink to={"/portfolio"}>Portfolio</NavLink>
                </li>
                <li>
                  <NavLink to={"/br/about"}>About us</NavLink>
                </li>
                <li>
                  <NavLink to={"/br/get-a-quote"}>Request order</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="py-8 px-2">
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
