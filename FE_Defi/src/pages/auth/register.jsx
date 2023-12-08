import React from "react";
import {Link, useNavigate} from 'react-router-dom';
import 'lazysizes';
import { useState } from "react";
import { redirect } from "react-router-dom";
import { CookiesProvider, useCookies } from "react-cookie";



function Register() {
    const [cookies, setCookie] = useCookies(["user"]);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: 'xxxx',
        pseudo: '',
        email: '',
        role: 'user',
        password: ''
      });

      const handleSubmit = async (event) => {
        event.preventDefault();

        try {
          const response = await fetch('http://localhost:4000/users/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
          });

          if (response.ok) {
            response.json().then(data => {
                const token = data.token;
                const pseudo = formData.pseudo;

                setCookie("token", token, { path: "/" });
                setCookie("pseudo", pseudo, { path: "/" });

                console.log(token);
                navigate("/form", { replace: true });

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

      const handleChange = (event) => {
        setFormData({
          ...formData,
          [event.target.id]: event.target.value
        });
      };



  return (

    <section className="flex flex-col md:flex-row h-screen items-center">

  <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-[50%] h-screen">
    <img src="./assets/bgLogin.png" alt="" className="w-full h-full object-cover" />
  </div>

  <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto  md:w-1/2 xl:w-[50%] h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center">

    <div className="w-full h-100">


      <h1 className="text-xl md:text-2xl font-black leading-tight mt-12 font-pop ">Crée une compte</h1>

      <form className="mt-6" action="#" method="POST" onSubmit={handleSubmit}>

      <div>
          <label className="block text-gray-700 font-pop">Nom utilisateur</label>
          <input type="text" name="" id="pseudo"  value={formData.pseudo}
            onChange={handleChange}  placeholder="Entrer le Nom utilisateur" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoFocus  required />
        </div>

        <div  className="mt-4">
          <label className="block text-gray-700 font-pop">Email Address</label>
          <input type="email" name=""   value={formData.email}
            onChange={handleChange} id="email" placeholder="Entrer l'adresse e-mail" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoFocus  required />
        </div>

        <div className="mt-4">
          <label className="block text-gray-700 font-pop">Mot de Passe</label>
          <input type="password" name=""  value={formData.password}
            onChange={handleChange} id="password" placeholder="Entrer le mot de passe" minLength="6" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
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

export default Register;
