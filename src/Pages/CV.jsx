import React from 'react'
import CVStyles from "./PagesStyles/PagesStyles.module.css"
import MarginLayout from '../layout/MarginLayout'

function CV() {
  return (
    <MarginLayout>
        <div className={CVStyles.container}>
            <div className={CVStyles.letter}>
                <h1>Curriculum</h1>
            </div>
            <div className={CVStyles.CardContainerX}>
                
            </div>
        </div>
    </MarginLayout>
  )
}

export default CV