import React from 'react'
import { motion } from 'framer-motion'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <motion.div 
          className="footer-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="footer-section">
            <h3>STRANGER THINGS</h3>
            <p>Experience the supernatural thriller that captivated audiences worldwide.</p>
            <button className="footer-btn" onClick={() => window.open('https://www.netflix.com/title/80057281', '_blank')}>
              Watch Now
            </button>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#characters">Characters</a></li>
              <li><a href="#episodes">Episodes</a></li>
              <li><a href="#gallery">Gallery</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Connect</h4>
            <ul>
              <li><a href="https://einzigartige.in/contact-us" target="_blank" rel="noopener noreferrer">Contact</a></li>
              <li><a href="https://github.com/orgs/Einzigartige" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            </ul>
          </div>
        </motion.div>
        
        <div className="footer-bottom">
          <p>&copy; 2026 Stranger Things Experience. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer