import React from 'react'
import { motion } from 'framer-motion'
import './Characters.css'

const characters = [
  { name: 'Eleven', role: 'Psychokinetic', img: 'https://placehold.co/300x400/b30000/fff?text=Eleven' },
  { name: 'Mike Wheeler', role: 'Leader', img: 'https://placehold.co/300x400/8b0000/fff?text=Mike' },
  { name: 'Dustin Henderson', role: 'Brain', img: 'https://placehold.co/300x400/b30000/fff?text=Dustin' },
  { name: 'Lucas Sinclair', role: 'Skeptic', img: 'https://placehold.co/300x400/8b0000/fff?text=Lucas' },
  { name: 'Max Mayfield', role: 'Tomboy', img: 'https://placehold.co/300x400/b30000/fff?text=Max' },
  { name: 'Will Byers', role: 'Missing', img: 'https://placehold.co/300x400/8b0000/fff?text=Will' },
]

const Characters = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
  }

  return (
    <section id="characters" className="characters">
      <div className="characters-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Main Characters
        </motion.h2>
        <motion.div 
          className="characters-grid"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {characters.map((char, index) => (
            <motion.div 
              key={index} 
              className="character-card"
              variants={item}
              whileHover={{ y: -10, scale: 1.03 }}
            >
              <div className="character-img">
                <img src={char.img} alt={char.name} />
                <div className="character-overlay">
                  <span>{char.role}</span>
                </div>
              </div>
              <h3>{char.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Characters