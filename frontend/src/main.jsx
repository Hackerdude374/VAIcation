import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import CreateTrip from './create-trip/CreateTripForm.jsx'
import Header from './components/custom/Header.jsx'
//for routes 
const router = createBrowserRouter([
{
  path:'/',
  element:<App/>
},
{
  path:'/create-trip',
  element:<CreateTrip/>
}

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
