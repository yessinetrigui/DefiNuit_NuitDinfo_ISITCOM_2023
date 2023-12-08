import React, {  useState } from "react";
import { Transition } from "@headlessui/react";
import {Link, useLocation} from 'react-router-dom';
import 'lazysizes';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (

    <section class="flex flex-col md:flex-row h-screen items-center">

  <div class="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
    <img src="./assets/bgLogin.png" alt="" class="w-full h-full object-cover" />
  </div>

  <div class="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto  md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center">

    <div class="w-full h-100">


      <h1 class="text-3xl md:text-3xl font-bold leading-tight mt-12 font-pop ">Connecter a votre compte</h1>

      <form class="mt-6" action="#" method="POST">
        <div>
          <label class="block text-gray-700 font-pop">Adresse e-mail</label>
          <input type="email" name="" id="" placeholder="Entrer l'adresse e-mail" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required />
        </div>

        <div class="mt-4">
          <label class="block text-gray-700 font-pop">Mot de Passe</label>
          <input type="password" name="" id="" placeholder="Entrer le mot de passe" minlength="6" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none" required />
        </div>

        <div class="text-right mt-2">
          <Link to="/forgetpassword" class="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Mot de Passe oublié !</Link>
        </div>

        <button type="submit" class="w-full block bg-C1 hover:bg-C2 focus:bg-indigo-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6">Log In</button>
      </form>



      <p class="mt-8">Besoin d'un compte? <Link to="/register" class="text-blue-500 hover:text-blue-700 font-semibold">Créer un compte</Link></p>


    </div>
  </div>

</section>
);
}

export default NavBar;
