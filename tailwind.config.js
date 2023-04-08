/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mobile': '360px',
      // => @media (min-width: 360px)
      
      'tablet':'px',

      'md': '960px',
      // => @media (min-width: 960px) 

      'lg': '1440px',
      // => @media (min-width: 1440px) 
    },
    extend: {
        fontFamily:{
            melodrama:"Melodrama",
            stardom:"Stardom"
        },
    },
  },
  plugins: [],
}

