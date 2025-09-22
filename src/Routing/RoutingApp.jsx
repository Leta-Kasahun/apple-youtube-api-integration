import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Service from './components/Service'
import { Route, Routes } from 'react-router-dom'

function RoutingApp() {
  return (
    <div>
     <Header/>
      <Routes>
        <Route path='/'element={ <Home/>}/>
        <Route path='/About'element={<About/>}/>
        <Route path='/Service'element={ <Service/>}/>
        <Route path='/Contact'element={ <Contact/>}/>
        <Route path='*'element={<h1>404 page not found</h1>}/>
         </Routes>
     <Footer/>
    </div>
  )
}

export default RoutingApp