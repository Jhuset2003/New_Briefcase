import React from 'react'
import WorksCard from '../components/Cards/WorksCard'
import MarginLayout from '../layout/MarginLayout'
import WorksStyles from "./PagesStyles/Works.module.css"

function Works() {
  return (
    <>
    <MarginLayout>
        <div className={WorksStyles.container}>
            <div className={WorksStyles.letters}>
                <h1>Proyectos</h1>
            </div>
            <div className={WorksStyles.WorksContainer}>
                <WorksCard/>
            </div>
        </div>
    </MarginLayout>
    </>
  )
}

export default Works