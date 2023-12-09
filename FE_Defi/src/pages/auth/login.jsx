import React, { useState } from "react";
import {Link, useNavigate} from 'react-router-dom';
import 'lazysizes';
import { useCookies } from "react-cookie";

function NavBar() {
    const [cookies, setCookie] = useCookies(["user"]);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        pseudo: '',
        password: ''
      });

      const handleSubmit = async (event) => {
        event.preventDefault();

        try {
          const response = await fetch('http://20.199.18.123:4000/users/login', {
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
                navigate("/user", { replace: true });

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

  <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
    <img src="./assets/bgLogin.png" alt="" className="w-full h-full object-cover" />
  </div>

  <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto  md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center">

    <div className="w-full h-100">


      <h1 className="text-3xl md:text-3xl font-bold leading-tight mt-12 font-pop ">Connecter a votre compte</h1>

      <form className="mt-6" action="#" method="POST" onSubmit={handleSubmit}>
        <div>
          <label className="block text-gray-700 font-pop">Adresse e-mail</label>
          <input type="email" name=""  value={formData.pseudo}
            onChange={handleChange} id="pseudo" placeholder="Entrer l'adresse e-mail" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoFocus  required />
        </div>

        <div className="mt-4">
          <label className="block text-gray-700 font-pop">Mot de Passe</label>
          <input type="password" name="" value={formData.password}
            onChange={handleChange} id="password"  placeholder="Entrer le mot de passe" minLength="6" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none" required />
        </div>

        <div className="text-right mt-2">
          <Link to="/forgetpassword" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Mot de Passe oublié !</Link>
        </div>

        <button type="submit" className="w-full block bg-C1 hover:bg-C2 focus:bg-indigo-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6">Log In</button>
      </form>



      <p className="mt-8">Besoin d'un compte? <Link to="/register" className="text-blue-500 hover:text-blue-700 font-semibold">Créer un compte</Link></p>


    </div>
  </div>

</section>
);
}

export default NavBar;
