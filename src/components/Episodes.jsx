import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './Episodes.css'

const episodes = [
  { season: 1, episodes: [
    { ep: 1, title: 'Chapter One: The Day We Found Out', date: 'July 15, 2016' },
    { ep: 2, title: 'Chapter Two: Trick or Treat, Freak', date: 'July 15, 2016' },
    { ep: 3, title: 'Chapter Three: The Case of the Missing Lifeguard', date: 'July 15, 2016' },
  ]},
  { season: 2, episodes: [
    { ep: 1, title: 'Chapter One: MADMAX', date: 'October 27, 2017' },
    { ep: 2, title: 'Chapter Two: Tricksters and Roustabouts', date: 'October 27, 2017' },
    { ep: 3, title: 'Chapter Three: The Case of the Missing Lifeguard', date: 'October 27, 2017' },
  ]},
  { season: 3, episodes: [
    { ep: 1, title: 'Chapter One: Suzie, Do You Copy?', date: 'July 4, 2019' },
    { ep: 2, title: 'Chapter Two: The Mall Rats', date: 'July 4, 2019' },
    { ep: 3, title: 'Chapter Three: The Case of the Missing Lifeguard', date: 'July 4, 2019' },
  ]},
  { season: 4, episodes: [
    { ep: 1, title: 'Chapter One: The Hellfire Club', date: 'May 27, 2022' },
    { ep: 2, title: 'Chapter Two: Vecna\'s Curse', date: 'May 27, 2022' },
    { ep: 3, title: 'Chapter Three: The Monster and the Superhero', date: 'May 27, 2022' },
  ]},
]

const Episodes = () => {
  const [activeSeason, setActiveSeason] = useState(1)

  return (
    <section id="episodes" className="episodes">
      <div className="episodes-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Episodes
        </motion.h2>
        
        <motion.div 
          className="season-tabs"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {episodes.map(s => (
            <button
              key={s.season}
              className={`season-tab ${activeSeason === s.season ? 'active' : ''}`}
              onClick={() => setActiveSeason(s.season)}
            >
              Season {s.season}
            </button>
          ))}
        </motion.div>

        <motion.div 
          className="episodes-list"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          key={activeSeason}
        >
          {episodes.find(s => s.season === activeSeason)?.episodes.map(ep => (
            <motion.div 
              key={ep.ep}
              className="episode-item"
              whileHover={{ x: 10 }}
            >
              <div className="episode-number">EP {ep.ep}</div>
              <div className="episode-info">
                <h3>{ep.title}</h3>
                <p>{ep.date}</p>
              </div>
              <button className="play-btn">▶</button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Episodes