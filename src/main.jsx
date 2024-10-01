import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom' 
import Layout from './Layout.jsx'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'
import SignUp from './components/Register/Signup.jsx'
import Login from './components/Login/Login.jsx'
import Features from './components/Features/Features.jsx'


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       } , {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact/>
//       }
//     ]

//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout/>}>
      
      <Route path='' element = {<Home/>}/>
      <Route path='about' element = {<About/>}/>
      <Route path='contact' element = {<Contact/>}/>
      <Route path='user/:id' element = {<User/>}/>
      <Route path='features' element = {<Features/>}/>
      <Route path='signup' element = {<SignUp/>}/>
      <Route path='login' element = {<Login/>}/>
      <Route 
      path='github'
       element = {<Github/>}
       loader = {githubInfoLoader}
       />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
