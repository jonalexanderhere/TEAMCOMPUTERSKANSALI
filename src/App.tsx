import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Activities from './components/Activities'
import Team from './components/Team'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Activities />
      <Team />
      <Gallery />
      <Footer />
    </div>
  )
}

export default App
