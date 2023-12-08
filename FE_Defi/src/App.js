import { Link } from 'react-router-dom';
import NavBar from './Components/navBar/NavBar';
import { useState } from 'react';



function App() {



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
        <div className='mx-auto flex items-center justify-center mt-20'>
             <img  className='w-1/2 rot'   src="./assets/planet.png" alt='planet' /> </div>

        </main>
    </div>
  );
}

export default App;

