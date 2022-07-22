import React from 'react'
import WorksCardStyles from "./CardsStyles/WorksCard.module.css"
import demo from "../../Img/Fetch.png"
function WorksCard() {
  return (
    <div className={WorksCardStyles.container}>
        <div className={WorksCardStyles.WorkCard}>
            <div className={WorksCardStyles.title}>
                <h3>Title</h3>
            </div>
            <div className={WorksCardStyles.img}>
                <img src={demo} alt="" />
            </div>
            <div className={WorksCardStyles.links}>
                  <a href="">Hola</a>
                  <a href="">hola2</a>
                </div>
        </div>
    </div>
  )
}

export default WorksCard