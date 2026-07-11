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
    <div className='min-h-screen bg-gray-900 text-white flex flex-col'>
      <Navbar/>
      <main className='flex-1'>

      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/collection"  element={<CollectionPage/>}/>
      </Routes>
      <ToastContainer/>
      </main>
      <FooterPage/>
      
    </div>
  )
}

export default App
