import React from 'react'
import { BiLogOutCircle } from "react-icons/bi";

export default function index() {
  return (
    <div className='w-full h-screen'>
        <SideBar/>
    </div>
  )
}


function SideBar(){
    return(
        <div className='w-1/6 bg-C1 flex flex-col justify-evenly items-center h-full h-'>
            <div className='mx-auto flex justify-center items-center flex-col'>
            <div className='w-32 h-32'>
                <img className='w-full h-full object-cover rounded-full' src="./assets/bgLogin.png" alt="" />
            </div>
            <h1 className='font-pop font-semibold text-lg text-white text-center'>
                Nom d’utilisateur
            </h1>
            <h1 className='font-pop text-lg text-white text-center'>
                50 Points
            </h1>
            </div>


            <div className='flex gap-4 items-center justify-center'>
                <BiLogOutCircle  className='text-white text-2xl'/>
                <h1 className='font-pop font-semibold text-lg text-white'>Déconnexion</h1>
            </div>
        </div>
    )
}
