import { Link } from 'react-router-dom';
import NavBar from './Components/navBar/NavBar';
import { Dialog} from '@headlessui/react'
import { useState } from 'react';



function App() {
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
    const [CurentData, setCurentData] = useState([]);


  return (
    <div  className='bg-white'>
        <NavBar/>
      <main className="2xl:max-w-[1600px] 1xl:max-w-[1250px] xl:max-w-[1100px] w-[95%] mx-auto py-12  lg:py-48">
            <h1 className='lg:text-6xl text-xl text-C1 font-pop font-bold text-center uppercase leading-snug'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h1>
            <h1 className='font-pop font-semibold text-lg text-center mt-12'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h1>
            <div className='flex mx-auto  justify-center items-center lg:flex-row flex-col mt-12 gap-6'>
            <Link className="bg-C1 px-32  lg:py-5 py-2  rounded-full font-pop text-lg w-fit  text-white">S’inscrire</Link>
            <Link className="border-C1 border-2 text-C1  px-32  lg:py-5 py-2  lg:mt-0  rounded-full font-pop text-lg w-fit  ">Our Goals</Link>
            </div>
            <MyDialog currentQuestions={currentQuestions} setCurrentQuestions={setCurrentQuestions} CurentData={CurentData}  setCurentData={setCurentData}/>
        <div className='mx-auto flex items-center justify-center mt-20'>
             <img  className='w-1/2 rot'   src="./assets/planet.png" alt='planet' /> </div>

        </main>
    </div>
  );
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

function Done(CurentData, setIsOpen){
    console.log(CurentData)
    setIsOpen(false);
}
export default App;


function MyDialog({currentQuestions, setCurrentQuestions, CurentData, setCurentData}) {
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
                         <h1 className='font-bold font-pop text-lg text-C1 text-center border-2 border-C1 w-[60%] py-3 mx-auto rounded-2xl mt-4 hidden' onClick={() => Done(CurentData, setIsOpen)} id="fnsh">Finish</h1>
                         </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    )
  }
