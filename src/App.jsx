import './App.css'
import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Characters from './components/Characters'
import Episodes from './components/Episodes'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import LoadingScreen from './components/LoadingScreen'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {loading && <LoadingScreen />}
      <CustomCursor />
      <Hero />
      <About />
      <Characters />
      <Episodes />
      <Gallery />
      <Footer />
    </>
  )
}

export default App