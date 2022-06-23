import React from 'react'
import Wave from 'react-wavify'
import NavStyle from "./Nav.module.css"

function Nav() {
  return (
    <div className={NavStyle.WaveContainer}>
      <Wave mask="url(#mask)" fill="white" options={{ speed:0.25, amplitude:20}}>
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="0.23" stopColor="white" />
            <stop offset="0.5" stopColor="black" />
          </linearGradient>
          <mask id="mask">
            <rect x="0" y="0" width="2000" height="104" fill="url(#gradient)"  />
          </mask>
        </defs>
    </Wave>
    </div>
  )
}

export default Nav