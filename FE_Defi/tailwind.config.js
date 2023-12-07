/** @type {import('tailwindcss').Config} */
module.exports = {

    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
      ],
    theme: {
      fontFamily: {
        'pop':['var(--font-poppins)'],
        'monta':['var(--font-montserrat)'],
        'ops':['Open Sans'],
        'inter':['var(--font-inter)'],
      },
      colors: {
        'C1': '#F2E205',
        'C2': '#32173C',
        'C3': '#F2CB05',
        'C4': '#A60C34',

        'white': '#FFFFFF',
        'black': '#000',
        'gold':'#FECC6B',
        'grey':'#DADADA',
        'grad1':'#483CDC',
        'grad2':'#5B4EF1',


      },
      extend: {

        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          'gradient-conic':
            'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        },
        screens: {
          '2xl': '1500px',
          '1xl': {'min': '1280px', 'max': '1499px'},
          'xl': '1000px',
          'max-sm': {'min': '0px', 'max': '539px'},

        },
      },
    },
plugins: [],
}
