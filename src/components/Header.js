import React, { useContext, useEffect, useState } from "react";
import body from "./Body";
import About from "./About";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

// function Component
const Header = () => {

  let [btnreact, setbtnreact] = useState("Login")

  const status = useOnlineStatus();
  const data = useContext(UserContext); 

  const card = useSelector((store)=>store.card.items);

  return (
    <>
      <nav className="navbar bg-slate-900 text-slate-300">
        <div className="flex items-center justify-between">
          <h3 className="text-xl ms-8 font-bold">Swiggy</h3>
          <div className="">
            <ul className="flex items-center p-4">
              <li className="px-4">
                <Link className="te" to="/">
                  Home
                </Link>
              </li>
              <li className="px-4">
                <Link className="" to="/about">
                  About
                </Link>
              </li>
              <li className="px-4">
                <Link className="" to="/contect">
                  Contect Us
                </Link>
              </li>
              <li className="px-4">
                <Link className="" to="/grocery">
                  Grocery
                </Link>
              </li>
              <li className="px-4">
                <button className="bg-sky-500/75 px-5 py-2 rounded-lg" type="button" onClick={() => { btnreact === "Login" ? setbtnreact('Logout') : setbtnreact('Login') }}>
                  {btnreact}
                </button>
              </li>
              <li className="px-4 font-bold">
                {data.loggedUser}
              </li>
              <li className="px-4">
              <Link className="" to="/cart">
                Card ({card.length} item)
                </Link>
              </li> 
              <li className="px-4">
                <div className="">
                  Online : {status ? "🟢" : "🔴"}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
