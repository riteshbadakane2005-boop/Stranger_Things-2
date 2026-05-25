import React from 'react'
import { motion } from 'framer-motion'
import './About.css'

const About = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
  }

  return (
    <section id="about" className="about">
      <div className="about-container">
        <motion.div 
          className="about-content"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="about-text" variants={item}>
            <h2 className="section-title">About Stranger Things</h2>
            <p>
              When a young boy vanishes in Hawkins, Indiana, his friends, family and the local police 
              are drawn into a supernatural investigation. But they uncover a mystery far more 
              terrifying than they could have imagined.
            </p>
            <p>
              Set in the 1980s, the series blends supernatural horror with the nostalgia of small-town 
              America, creating a unique viewing experience that pays homage to the works of Steven 
              Spielberg, John Carpenter, and Stephen King.
            </p>
            <motion.button 
              className="about-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://www.netflix.com/title/80057281', '_blank')}
            >
              Watch on Netflix
            </motion.button>
          </motion.div>
          <motion.div className="about-stats" variants={item}>
            <div className="stat-card">
              <h3>4</h3>
              <p>Seasons</p>
            </div>
            <div className="stat-card">
              <h3>35+</h3>
              <p>Episodes</p>
            </div>
            <div className="stat-card">
              <h3>2016</h3>
              <p>Premiere</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About