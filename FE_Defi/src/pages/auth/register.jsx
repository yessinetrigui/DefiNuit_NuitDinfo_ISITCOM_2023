import React, {  useState } from "react";
import { Transition } from "@headlessui/react";
import {Link, useLocation} from 'react-router-dom';
import 'lazysizes';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (

    <section class="flex flex-col md:flex-row h-screen items-center">

  <div class="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-[50%] h-screen">
    <img src="./assets/bgLogin.png" alt="" class="w-full h-full object-cover" />
  </div>

  <div class="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto  md:w-1/2 xl:w-[50%] h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center">

    <div class="w-full h-100">


      <h1 class="text-xl md:text-2xl font-black leading-tight mt-12 font-pop ">Crée une compte</h1>

      <form class="mt-6" action="#" method="POST">

      <div>
          <label class="block text-gray-700 font-pop">Nom utilisateur</label>
          <input type="email" name="" id="" placeholder="Entrer le Nom utilisateur" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required />
        </div>

        <div  class="mt-4">
          <label class="block text-gray-700 font-pop">Email Address</label>
          <input type="email" name="" id="" placeholder="Entrer l'adresse e-mail" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required />
        </div>

        <div class="mt-4">
          <label class="block text-gray-700 font-pop">Mot de Passe</label>
          <input type="password" name="" id="" placeholder="Entrer le mot de passe" minlength="6" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none" required />
        </div>

        <button type="submit" class="w-full block bg-C1 hover:bg-C2 focus:bg-indigo-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6">S'inscrire</button>
      </form>



      <p class="mt-8">A deja un compte !?  <Link to="/login"   class="text-blue-500 hover:text-blue-700 font-semibold">Connecter à votre compte</Link></p>


    </div>
  </div>

</section>
);
}

export default NavBar;
