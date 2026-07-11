import React from 'react'

import { Routes,Route
 } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CollectionPage from './pages/CollectionPage'
import Navbar from './components/Navbar'
import {ToastContainer, toast} from 'react-toastify';
import FooterPage from './components/FooterPage'

const App = () => {
  
  return (
    <div className='w-full bg-gray-900 text-white'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/collection"  element={<CollectionPage/>}/>
      </Routes>
      <ToastContainer/>
      <FooterPage/>
      
    </div>
  )
}

export default App
