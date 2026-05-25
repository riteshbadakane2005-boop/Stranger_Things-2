import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './CustomCursor.css'

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [hidden, setHidden] = useState(true)

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setHidden(false)
    }

    const hideCursor = () => setHidden(true)
    const showCursor = () => setHidden(false)

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mouseleave', hideCursor)
    window.addEventListener('mouseenter', showCursor)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseleave', hideCursor)
      window.removeEventListener('mouseenter', showCursor)
    }
  }, [])

  return (
    <>
      <motion.div
        className="cursor-dot"
        animate={{ x: position.x - 5, y: position.y - 5, opacity: hidden ? 0 : 1 }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.1 }}
      />
      <motion.div
        className="cursor-outline"
        animate={{ x: position.x - 20, y: position.y - 20, opacity: hidden ? 0 : 1 }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.2 }}
      />
    </>
  )
}

export default CustomCursor