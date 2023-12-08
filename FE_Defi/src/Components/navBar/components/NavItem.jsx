import { Link } from "react-router-dom"

export default function NavItem(props) {

    if(props.link==="/#aboutus"){
        return (
            <>
              <li  key={props.children} className="md:mr-2 w-fit  hover:scale-105 duration-700 relative">
             <a href={props.link}  onClick={() => props.setIsOpen(false)} className={(props.state==="active")? "font-bold  z-10 relative w-fit text-xl p-1 text-primary font-pop UnderLineHover duration-500 rounded-lg " : "font-light w-fit text-xl p-1 text-black opacity-70 font-pop  duration-500 rounded-lg "}> {props.children} </a>
             </li>
            </>
         )
    }else{
        return (
            <>
              <li  key={props.children} className="md:mr-2 w-fit hover:scale-105 duration-700 relative">
             <Link   onClick={() => props.setIsOpen(false)} to={props.link} className={(props.state==="active")? "font-bold z-10 relative w-fit text-xl p-1 text-primary font-pop UnderLineHover duration-500 rounded-lg relative" : "font-light w-fit text-xl p-1 text-black opacity-70 font-pop  duration-500 rounded-lg "}> {props.children} </Link>
             </li>
            </>
         )
    }

  }
