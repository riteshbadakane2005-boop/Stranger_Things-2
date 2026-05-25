import React from 'react'
import { motion } from 'framer-motion'
import './Gallery.css'

const images = [
  'https://placehold.co/400x300/b30000/fff?text=Image+1',
  'https://placehold.co/400x300/8b0000/fff?text=Image+2',
  'https://placehold.co/400x300/b30000/fff?text=Image+3',
  'https://placehold.co/400x300/8b0000/fff?text=Image+4',
  'https://placehold.co/400x300/b30000/fff?text=Image+5',
  'https://placehold.co/400x300/8b0000/fff?text=Image+6',
]

const Gallery = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 100 } }
  }

  return (
    <section id="gallery" className="gallery">
      <div className="gallery-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Gallery
        </motion.h2>
        <motion.div 
          className="gallery-grid"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {images.map((img, index) => (
            <motion.div 
              key={index} 
              className="gallery-item"
              variants={item}
              whileHover={{ scale: 1.05, zIndex: 10 }}
            >
              <img src={img} alt={`Gallery ${index + 1}`} />
              <div className="gallery-overlay">
                <span>View</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Gallery