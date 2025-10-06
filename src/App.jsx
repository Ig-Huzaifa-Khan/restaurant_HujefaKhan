
import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import About from './components/About.jsx'
import Footer from './components/Footer.jsx'
import Menu from './components/Menu.jsx'

function App() {

  return (
    <main>
      <Header />
      <About />
      <Menu />
      <Footer />
    </main>
  )
}

export default App
