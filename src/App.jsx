
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MdWhatsapp } from "react-icons/md";
import Header from '../pages/Header'
import Productos from '../pages/Productos'
import Pdp from '../pages/Pdp'
import QuienesSomos from '../pages/QuienesSomos'
import Contacto from '../pages/Contacto'
import Footer from '../pages/Footer'
import BannerSwiper from '../pages/BannerSwiper'
import './App.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function App() {

  return (
    <BrowserRouter> 
        <Header />
        <a href="https://wa.me/541124903366" target="_blank" rel="noopener noreferrer" className='flex m-auto w-full'>
        <MdWhatsapp className='chatBuble'/>
        </a>
      <Routes>
        <Route path="/" element={
          <>
          <BannerSwiper />
            <main>
              <h1 style={{visibility:'hidden', position: 'absolute'}} >MAXXGUARD ARMEROS DE SEGURIDAD</h1>
              <Productos />
              <QuienesSomos />
              <Contacto />
            </main>
          </>
        } />

        <Route path="/producto/:id" element={<Pdp />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
