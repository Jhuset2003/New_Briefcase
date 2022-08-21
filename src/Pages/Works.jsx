import React from 'react'
import WorksCard from '../components/Cards/WorksCard'
import MarginLayout from '../layout/MarginLayout'
import WorksStyles from "./PagesStyles/PagesStyles.module.css"

function Works() {
  return (
    <MarginLayout>
        <div className={WorksStyles.container}>
            <div className={WorksStyles.letter}>
                <h1>Proyectos</h1>
            </div>
            <div className={WorksStyles.CardContainerY}>
                <WorksCard/>
            </div>
        </div>
    </MarginLayout>
  )
}

export default Works