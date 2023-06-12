import { useState } from 'react'
import {BrowserRouter, Routes, Route, Link, NavLink} from 'react-router-dom'
import Home from './routes/Home'

import './App.css'

function App() {

  return (
    <>
     <BrowserRouter>
     <main>
        <nav>
            <h1>Dashboard</h1>
            <div className='nav-links'>
              <NavLink className='link-text' to="/">Home</NavLink>
              {/* <NavLink to="localfamiliespage">LocalFamiliesPage</NavLink> */}
            </div>  
          </nav>
        
          <section className='app-section'>
            <h1>section</h1>
            <Routes>
              <Route index element={<Home />}/>
            {/*  <Route path='/about' element={<About />}/> */}
            {/* <Route path='/localfamiliespage' element={<LocalFamiliesPage/>}/> */}
            </Routes>
          </section>
      </main>
        
     </BrowserRouter> 
    </>
  )
}

export default App
