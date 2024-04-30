# To create a react project : 
"npm create vite"
name the project
choose React and Javascript

"cd /yourproject"
"npm install" or "npm i"


# To run the project in dev env
"npm run dev"
open the project in localhost created


# To install tailwind CSS
npm install -D tailwindcss postcss autoprefixer 
npx tailwindcss init -p
## Configure your template path
add in tailwind.config.js :
content: [
    ".index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
],
## Add the tailwind CSS in your project
add in index.css :
@tailwind base;
@tailwind components;
@tailwind utilities;
## run it (to test)
"npm run dev"


# For GSAP (if needed) in Reactjs
npm i @gsap/react


# For svg 
npm install --save-dev vite-plugin-svgr
## In vite.config.js
import svgr from "vite-plugin-svgr";
export default {
  // ...
  plugins: [svgr()],
};
## Then the syntax : 
import Logo from "./logo.svg?react";


# For alias (to manage imgs and svg)
## In vite.config.js
  resolve: {
    alias: {
      '@assets': assets,
    },
  },
## Then the syntax (img) :
import Logoinsta from "@assets/start/instagram-new.png";
## Then the syntax (svg) :
import Logoinsta from "@assets/start/svg/ImageInsta";


# To deploy it 
run "npm run build"
drag and drop the build folder in the host