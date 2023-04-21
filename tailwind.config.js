/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html" , "./src/**/*.jsx"],
  theme: {
    extend: { 
      colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'morado': '#450dbf',
      'gris': '#424240',
      'grisClaro': '#a6a4a4',
      'negro': '#000',
      'azul': '#2d1bb3',
      'amarillo': '#fc8803',
      'rojo': '#bf0a0a',
      
    },},
  },
  plugins: [],
}

