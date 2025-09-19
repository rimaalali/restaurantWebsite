import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import {createHashRouter,RouterProvider} from "react-router-dom" ;
import './index.css'
import Home from './pages/Home/Home';
import Sweet from './pages/Sweet/Sweet';
import Drinks from './pages/Drinks/Drinks';
import FastFood from './pages/FastFood/FastFood';
import Buy from './pages/Buy/Buy';  
import Bill from './pages/Bill/Bill';
import Dashbord from './pages/DashBord/Dashbord';
import Admin from './pages/Admin/Admin'
const router = createHashRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/Sweet",
    element: <Sweet/> ,
  },
   {
     path: "/Drinks",
     element: <Drinks/>
  },
  {
    path: "/FastFood",
    element: <FastFood/>
 },
 {
  path: "/Buy",
  element: <Buy/>
},
 {
  path: "/Bill",
  element: <Bill/>
},
 {
  path: "/Dashbord",
  element: <Dashbord/>
},
 {
  path: "/Admin",
  element: <Admin/>
},
], {
  basename: '/restaurantWebsite',
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    
  </StrictMode>,
)
