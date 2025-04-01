import React from 'react'
import './AnimatedGrid.css'

const AnimatedGrid = () => {
  return (
    <div className="animated-grid-container">
      <div className="animated-grid-bg">
        {/* Opcional: Capa animada */}
        <div className="animated-grid-overlay"></div>
      </div>
    </div>
  )
}

export default AnimatedGrid
