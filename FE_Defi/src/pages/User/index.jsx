import React from 'react'
import { BiLogOutCircle } from "react-icons/bi";
import { VscFeedback } from "react-icons/vsc";
import { FaTasks } from "react-icons/fa";
import { IoMdAnalytics } from "react-icons/io";




export default function index() {


  return (
    <div className='w-full lg:h-screen flex bg-white lg:flex-row flex-col'>
        <SideBar/>
        <MainSide />
    </div>
  )
}

function Title({title, icon}){
    return (
        <div className='flex gap-4 mt-12'>
            {icon}
            <h1 className='font-pop font-extrabold text-C1 text-xl'>{title}</h1>
        </div>

    )
}
function Card({title, desc}){
    return(
        <div  className="block max-w-sm p-6 shadow-xl rounded-xl">
            <h5 className="font-pop font-bold text-xl text-C2 my-2">{title}</h5>
            <p className="font-pop text-lg">{desc}</p>
        </div>

    )
}

function Task({title, desc}){
    return(
        <div  className="block w-full p-6 shadow-xl rounded-xl">
            <h5 className="font-pop font-bold text-xl text-C2 my-2">{title}</h5>
            <p className="font-pop text-lg">{desc}</p>
        <div className='w-full flex justify-end'>
            <div className="border-C1 border-2 text-C1  px-16  py-2  lg:mt-0  rounded-full font-pop text-lg w-fit cursor-pointer hover:bg-C1 hover:text-white">Terminer</div>

        </div>
        </div>

    )
}




function MainSide(){
    return(
        <div className='lg:w-[80%] w-full lg:p-12 pt-4 p-6'>
                <div>
                    <Title title="Conseils" icon=<VscFeedback className='text-2xl text-C1'/> />

                        <div className='flex flex-wrap gap-12'>
                        <Card title="Titre de consigne" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500..." />
                        <Card title="Titre de consigne" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500..." />
                        <Card title="Titre de consigne" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500..." />

                        </div>

                        <Title title="Tache de semaine" icon=<FaTasks  className='text-2xl text-C1'/> />

<div className='flex flex-wrap gap-12'>
<Task title="Titre de tache" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply." />

</div>


                </div>



                <Title title="Analyse l'actualité" icon=<IoMdAnalytics  className='text-2xl text-C1'/> />
                <div className='flex gap-8 lg:flex-row flex-col'>
                    <div className='lg:w-2/3 w-full'>
                        <textarea name="" id="" cols="30" rows="5" className='w-full border-2 border-black border-dashed rounded-2xl p-4 '>Taper une texte</textarea>
                    </div>
                    <div className='flex flex-col lg:w-1/3 w-full justify-center items-center'>
                        <h1 className='font-pop font-bold text-4xl text-center opacity-60'>00%</h1>
                        <h1 className='font-pop font-bold text-xl text-center opacity-60'>Le resultat d’analyse</h1>
                        <div className="bg-C1 px-32  lg:py-5 py-2  rounded-xl font-pop text-lg w-fit  text-white opacity-60">Analyser</div>

                    </div>
                </div>
        </div>


    )
}

function SideBar(){
    return(
        <div className='lg:w-1/6 w-full bg-C1 flex flex-col justify-between items-center h-full py-12 pt-28'>
            <div className='mx-auto flex justify-center items-center flex-col'>
            <div className='w-32 h-32'>
                <img className='w-full h-full object-cover rounded-full' src="./assets/bgLogin.png" alt="" />
            </div>
            <h1 className='font-pop font-semibold text-lg text-white text-center mt-6'>
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
