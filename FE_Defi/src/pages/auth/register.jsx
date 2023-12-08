import React from "react";
import {Link} from 'react-router-dom';
import 'lazysizes';

function NavBar() {


  return (

    <section className="flex flex-col md:flex-row h-screen items-center">

  <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-[50%] h-screen">
    <img src="./assets/bgLogin.png" alt="" className="w-full h-full object-cover" />
  </div>

  <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto  md:w-1/2 xl:w-[50%] h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center">

    <div className="w-full h-100">


      <h1 className="text-xl md:text-2xl font-black leading-tight mt-12 font-pop ">Crée une compte</h1>

      <form className="mt-6" action="#" method="POST">

      <div>
          <label className="block text-gray-700 font-pop">Nom utilisateur</label>
          <input type="email" name="" id="nuser" placeholder="Entrer le Nom utilisateur" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoFocus  required />
        </div>

        <div  className="mt-4">
          <label className="block text-gray-700 font-pop">Email Address</label>
          <input type="email" name="" id="em" placeholder="Entrer l'adresse e-mail" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoFocus  required />
        </div>

        <div className="mt-4">
          <label className="block text-gray-700 font-pop">Mot de Passe</label>
          <input type="password" name="" id="mdp" placeholder="Entrer le mot de passe" minLength="6" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none" required />
        </div>

        <button type="submit" className="w-full block bg-C1 hover:bg-C2 focus:bg-indigo-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6">S'inscrire</button>
      </form>



      <p className="mt-8">A deja un compte !?  <Link to="/login"   className="text-blue-500 hover:text-blue-700 font-semibold">Connecter à votre compte</Link></p>


    </div>
  </div>

</section>
);
}

export default NavBar;
