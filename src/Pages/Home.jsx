import React from 'react'
import MarginLayout from "../layout/MarginLayout"
import HomeStyles from "./PagesStyles/Home.module.css"
import log from "../Img/Log.png"

function Home() {
  return (
   <>
   <MarginLayout>
    <div className={HomeStyles.Container}>
      <div className={HomeStyles.LettersContainer}>
        <h1>Bienvenido A Mi Portafolio Virtual</h1>
        <h2>Albert Quintanilla </h2>
      </div>
      <div className={HomeStyles.LogContainer}>
        <img src={log} alt="" />
      </div>
      <div>
        <p className={HomeStyles.Text}>
          Desallorrador web FullStack especializado en <strong>FrontEnd</strong>  ambicioso y siempre dispuesto a aprender
        </p>
      </div>
    </div>
   </MarginLayout>
   </>
  )
}

export default Home