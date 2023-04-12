/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}", 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      backgroundImage: {
        'newsletter' : "url('../public/images/high5.jpg')",
      }
    },
  },
  plugins: [ require('flowbite/plugin')],
}
