import React, { useEffect, useState } from 'react'
import { BiLogOutCircle } from "react-icons/bi";
import { VscFeedback } from "react-icons/vsc";
import { FaTasks } from "react-icons/fa";
import { IoMdAnalytics } from "react-icons/io";
import { useCookies } from 'react-cookie';
import { Dialog} from '@headlessui/react'

import { useNavigate, NavLink } from "react-router-dom";


export default function Index() {
    let questions = [
        {
            'question': "Quelle est votre consommation moyenne d'eau par jour ?",
            'choices': ["Moins de 50 litres.", "Entre 50 et 100 litres.", "Plus de 100 litres."]
        },
        {
            'question': "Combien de fois par semaine utilisez-vous les transports en commun ou pratiquez-vous le covoiturage pour vos déplacements ?",
            'choices': ["Plus de 4 fois par semaine.", "Entre 1 et 3 fois par semaine.", "Jamais."]
        },
    ]
    const [currentQuestions, setCurrentQuestions] = useState(questions);

    const navigate = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies(['token', 'pseudo']);
    const [CurentData, setCurentData] = useState([]);

    const [cons, setCons] = useState("");
    const [task, setTask] = useState("");


    useEffect(() => {
        if(cookies.token===undefined){
            console.log(cookies.token)
            navigate("/login", { replace: true });

        }
        const getData = async () =>{
            try {
                const response = await fetch('http://localhost:4000/advice/getData/'+cookies.pseudo, {
                  method: 'GET',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                });

                if (response.ok) {
                  response.json().then(data => {
                      const content = data.content;
                    setCons(content);
                      // You can use the token here as needed, for example, storing it or using it for authentication
                      // return redirect("/user");
                  }).catch(error => {
                      console.error('Error parsing JSON:', error);
                  });

                } else {
                  console.error('Failed to register user.');
                }
              } catch (error) {
                console.error('Error:', error);
              }

              try {
                const response = await fetch('http://localhost:4000/tasks/user/'+cookies.pseudo, {
                  method: 'GET',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                });

                if (response.ok) {
                  response.json().then(data => {
                    setTask(data[0]);
                      // You can use the token here as needed, for example, storing it or using it for authentication
                      // return redirect("/user");
                  }).catch(error => {
                      console.error('Error parsing JSON:', error);
                  });

                } else {
                  console.error('Failed to register user.');
                }
              } catch (error) {
                console.error('Error:', error);
              }
        };
        getData();
    },[""]);

    const handleLogout = () => {
        // Remove the 'token' cookie
        console.log("logout")
       removeCookie('token');

        // Any other logout logic you might have
        // Redirect, clear state, etc.
      };

  return (
    <div className='w-full lg:h-screen flex bg-white lg:flex-row flex-col'>
        <MyDialog currentQuestions={currentQuestions} setCurrentQuestions={setCurrentQuestions} CurentData={CurentData}  setCurentData={setCurentData} navigate={navigate}/>
        <SideBar handleLogout={handleLogout} pseudo={cookies.pseudo}/>
        <MainSide cons={cons} task={task} />
    </div>
  )
}

function Next(setCurrentQuestions){
    const newQuestions = [
        {
          'question': "Quel est le principal gaz responsable de l'effet de serre ?",
          'choices': ["Dioxyde de carbone (CO2).", "Méthane (CH4).", "Protoxyde d'azote (N2O)."]
        },
        {
          'question': "Quel pourcentage des émissions mondiales de gaz à effet de serre est imputable à l'activité humaine ?",
          'choices': ["Environ 25%.", "Environ 50%.", "Environ 75%."]
        },
      ];
      document.getElementById('cnt').classList.toggle('hidden');
      document.getElementById('fnsh').classList.toggle('hidden');
      setCurrentQuestions(newQuestions);

}

function Done(CurentData, setIsOpen,navigate){

    console.log(CurentData)
    navigate("/user", { replace: true });
    setIsOpen(false);
}


async function  ConfirmTask(idTask){
    const [cookies, setCookie, removeCookie] = useCookies(['token', 'pseudo']);

    try {
        const response = await fetch('http://localhost:4000/tasks/complete/'+cookies.pseudo+"/"+idTask, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
        });

        if (response.ok) {
          response.json().then(data => {
                console.log("done")
              // You can use the token here as needed, for example, storing it or using it for authentication
              // return redirect("/user");
          }).catch(error => {
              console.error('Error parsing JSON:', error);
          });

        } else {
          console.error('Failed to register user.');
        }
      } catch (error) {
        console.error('Error:', error);
      }
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
        <div  className="block max-w-6xl p-6 shadow-xl rounded-xl">
            <h5 className="font-pop font-bold text-xl text-C2 my-2">{title}</h5>
            <p className="font-pop text-lg">{desc}</p>
        </div>

    )
}

function Task({title, desc, id}){
    return(
        <div  className="block w-full p-6 shadow-xl rounded-xl">
            <h5 className="font-pop font-bold text-xl text-C2 my-2">{title}</h5>
            <p className="font-pop text-lg">{desc}</p>
        <div className='w-full flex justify-end'>
            <div className="border-C1 border-2 text-C1  px-16  py-2  lg:mt-0  rounded-full font-pop text-lg w-fit cursor-pointer hover:bg-C1 hover:text-white" onClick={()=>ConfirmTask(id)}>Terminer</div>

        </div>
        </div>

    )
}




function MainSide({cons, task}){
    return(
        <div className='lg:w-[80%] w-full lg:p-12 pt-4 p-6'>
                <div>
                    <Title title="Conseils" icon=<VscFeedback className='text-2xl text-C1'/> />
                        <div className='flex flex-wrap gap-12'>
                        <Card desc={cons} />

                        </div>

                        <Title title="Tache de semaine" icon=<FaTasks  className='text-2xl text-C1'/> />

<div className='flex flex-wrap gap-12'>

<Task title={task.title} desc={task.content} id={task.id} />

</div>


                </div>



                <Title title="Analyse l'actualité" icon=<IoMdAnalytics  className='text-2xl text-C1'/> />
                <div className='flex gap-8 lg:flex-row flex-col'>
                    <div className='lg:w-2/3 w-full'>
                        <textarea name="" id="" cols="30" rows="5" className='w-full border-2 border-black border-dashed rounded-2xl p-4 '   defaultValue='Taper une texte'
></textarea>
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


function SideBar({handleLogout, pseudo}){
    return(
        <div className='lg:w-1/6 w-full bg-C1 flex flex-col justify-between items-center h-full py-12 pt-28'>
            <div className='mx-auto flex justify-center items-center flex-col'>
            <div className='w-32 h-32'>
                <img className='w-full h-full object-cover rounded-full' src="./assets/bgLogin.png" alt="" />
            </div>
            <h1 className='font-pop font-semibold text-lg text-white text-center mt-6'>
                {pseudo}
            </h1>
            <h1 className='font-pop text-lg text-white text-center'>
                50 Points
            </h1>
            </div>


            <div className='flex gap-4 items-center justify-center' >
                <BiLogOutCircle  className='text-white text-2xl'/>
                <h1 className='font-pop font-semibold text-lg text-white' onClick={()=>handleLogout()} >Déconnexion</h1>
            </div>
        </div>
    )
}




function MyDialog({currentQuestions, setCurrentQuestions, CurentData, setCurentData, navigate}) {
    let [isOpen, setIsOpen] = useState(true)
    let [reset, setReset] = useState(false);

    let x = 0
    return (
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(true)}
        className="relative z-50"
      >
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <div className="fixed inset-0 bg-opacity-60 bg-white" aria-hidden="true" />

        {/* Full-screen scrollable container */}
        <div className="fixed inset-0 w-screen overflow-y-auto">
          {/* Container to center the panel */}
          <div className="flex min-h-full items-center justify-center p-4">
            {/* The actual dialog panel  */}
            <Dialog.Panel className="mx-auto   bg-white  shadow-xl rounded-xl p-24 max-w-5xl">
              <Dialog.Title>
                    <span className='text-C1 font-pop font-bold text-xl  text-center block'>Remplir le formulaire pour continuer</span>
                    <span className='font-pop font-semibold text-black text-lg text-center mt-2 block'>Repondre de cette questionaire</span>

              </Dialog.Title>

              {

                currentQuestions.map((e)=>{
                            x++
                                return (
                                    <div className='mt-5' key={x}>
                                    <h1 className='text-C1 font-pop font-medium text-xl  text-start mb-2'>{x +" " + e.question}</h1>
                                        {e.choices.map((x)=>{
                                                return(
                                                <div className='flex gap-2' key={x}>
                                                    <input type='radio' name={e.question} checked={CurentData[e.question] === x && !reset} onChange={()=>{setCurentData(
                                                        CurentData => ({
                                                            ...CurentData,
                                                            [e.question]: x
                                                          }))}}/>
                                                    <h1>{x}</h1>
                                                </div>
                                                )
                                            })}
                                        </div>
                                )
                        })
                }
                    <div className='w-full mx-auto flex flex-col items-center  mt-12'>
                        <div className='flex gap-6'>
                        <div className='w-12 h-[5px] bg-C1 rounded-2xl'></div>
                        <div className='w-12 h-[5px] bg-C1 rounded-2xl opacity-50'></div>
                        </div>

                         <h1 className='font-bold font-pop text-lg text-C1 text-center border-2 border-C1 w-[60%] py-3 mx-auto rounded-2xl mt-4' onClick={() => {Next(setCurrentQuestions); setReset(false)}} id="cnt">Continuer</h1>
                         <h1 className='font-bold font-pop text-lg text-C1 text-center border-2 border-C1 w-[60%] py-3 mx-auto rounded-2xl mt-4 hidden' onClick={() => Done(CurentData, setIsOpen,navigate)} id="fnsh">Finish</h1>
                         </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    )
  }
