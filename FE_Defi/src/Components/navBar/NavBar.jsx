import React, {  useState } from "react";
import { Transition } from "@headlessui/react";
import NavItem from "./components/NavItem";
import {Link, useLocation} from 'react-router-dom';
import 'lazysizes';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <div>

      <nav className="mx-auto w-full h-fit md:bg-white sm:bg-white max-sm:bg-white  lg:pt-2 z-20">
        <div className="flex flex-wrap items-center justify-between mx-auto xl:p-4 lg:py-4 py-3 lg:px-4 px-5">
          <div className="flex items-center w-full">
            <div className="flex items-center xl:mx-6 mx-2 justify-between w-full">
              <div className="flex justify-center items-center flex-shrink-0 flex-col">
              <div className="text-2xl">Logo<strong className="font-bold">Company</strong></div>
                <small className="tracking-widest">Your tagline goes here</small>
              </div>
              <div className="hidden lg:w-auto md:w-full sm:w-full max-sm:w-full lg:flex items-center justify-between">
                <ul key="" className="flex flex-col font-medium xl:p-4 lg:p-0 mt-4 border border-primary rounded-lg rounded-b-none md:flex-row md:space-x-6 lg:mt-0 lg:border-0 lg:bg-white w-fit">
                  <NavItem  setIsOpen={setIsOpen}   state={(location.pathname==="/")? "active": "none"} link="/">Home</NavItem>
                  <NavItem  setIsOpen={setIsOpen}   link="/#aboutus">About Us</NavItem>
                  <NavItem  setIsOpen={setIsOpen}   state={(location.pathname.startsWith("/services"))? "active": "none"}  link="/services" id="2" >About Us</NavItem>
                  <NavItem  setIsOpen={setIsOpen}   state={(location.pathname.startsWith("/events"))? "active": "none"}  link="/events" id="1" >About Us</NavItem>
                </ul>
                <Link to="/login" className="bg-C1 px-8 py-2  rounded-full font-pop text-lg w-fit ml-16 text-white">Connecter</Link>
              </div>
            </div>
            <div className="mr-10 flex lg:hidden ">
              <button
                onClick={() => setIsOpen((isOpen) => !isOpen)}
                type="button"
                className="bg-C2 inline-flex items-center justify-center p-1 rounded-full text-white  hover:bg-primary_shad focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-fifth0 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
                show={isOpen}
                enter="transition ease-in-out duration-100 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in-out duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"

        >

            <div className={(isOpen) ?  "lg:hidden mx-2 pb-8" : "hidden"} id="mobile-menu">
              <ul
                key=""
                className="flex flex-col font-medium p-4 lg:p-0 mt-4 border-l-4 border-primary   md:flex-row md:space-x-8 lg:mt-0 lg:border-0 lg:bg-white w-full"
              >
               <NavItem  setIsOpen={setIsOpen}  state={(location.pathname==="/")? "active": "none"} link="/">Home</NavItem>
                  <NavItem       setIsOpen={setIsOpen}      link="/#gallery">Home</NavItem>
                  <NavItem  setIsOpen={setIsOpen}  state={(location.search==="?name=tastylounge")? "active": "none"}   link="/catalogue" id="2" > Home</NavItem>
                  <NavItem  setIsOpen={setIsOpen}   state={(location.search==="?name=tastyicecream")? "active": "none"} link="/catalogue" id="1" >Home  </NavItem>
              </ul>

            </div>

        </Transition>
      </nav>
    </div>
  );
}

export default NavBar;
