import React from 'react'
import CVCardStyles from "./CardsStyles/CVCardStyles.module.css"
import react from "../../Img/react.png"

function CVCard() {
  return (
    <div className={CVCardStyles.Container}>
        <div className={CVCardStyles.ImgContainer}>
          <img src={react} alt="" />
        </div>
        <div>
          <h4>React</h4>
          <p>Nivel de competencia<br/><strong>Medio-Alto</strong></p>
        </div>
    </div>
  )
}

export default CVCard