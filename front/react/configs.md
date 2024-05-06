# To create a react project : 
```
npm create vite
```
name the project
choose React and Javascript
```
cd /yourproject
npm install
```

# To run the project in dev env
```
npm run dev
```
open the project in localhost created


# To install tailwind CSS
```
npm install -D tailwindcss postcss autoprefixer 
npx tailwindcss init -p
```
## Configure your template path
add in tailwind.config.js :
```js
content: [
    ".index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
],
```
## Add the tailwind CSS in your project
add in index.css :
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
## run it (to test)
```
npm run dev
```
The result should be :
```bash
  VITE v5.2.10  ready in 533 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```


# For GSAP in Reactjs
```
npm i @gsap/react
```

Then import and use in Animation.js :
```js
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function projectAnimations() {
}
```
After creating the animation. Import the js file as a web component and use it in a special useEffect() Hook function :
```js
import { projectAnimations } from "./Animations";

const Projets = () => {
	useEffect(() => {
		projectAnimations();
	}, []);
  /*...*/
}
```


# For alias and svg (to manage imgs)
**For svg**
```
npm install --save-dev vite-plugin-svgr
```
In vite.config.js
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/#resolve-alias
import path from 'path'
const root = process.cwd()
const resolve = (p) => path.resolve(root, p)
const assets = resolve('src/assets')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@assets': assets,
    },
  },
})
```
Then the syntax (img) :
```js
import Logoinsta from "@assets/start/instagram-new.png";
```
Then the syntax (svg) : 
```js
import Logo from "@assets/logo.svg?react";
```

# For routing :
```
npm i -D react-router-dom
```
Then. Create a Router in App.jsx
```jsx
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Start />} />
          <Route path="post" element={<Post />} />
          <Route path="search" element={<Search />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}
```
export default App
And Create a Layout Component...
<a href="https://www.w3schools.com/react/react_router.asp">Follow instruction here</a>

**To navigate through pages you should use the ```<Link>``` Component :**
```jsx
<Link to="/"></Link>
```


# To deploy it 
run ```npm run build```
drag and drop the build folder in the web hosting service