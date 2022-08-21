import React from 'react'
import AboutMeCard from '../components/Cards/AboutMeCard'
import MarginLayout from '../layout/MarginLayout'
import AboutMeStyles from "./PagesStyles/PagesStyles.module.css"

function AboutMe() {
  return (
    <MarginLayout>
        <div className={AboutMeStyles.container}>
            <div className={AboutMeStyles.letter}>
                <h1>Acerca de mi</h1>
            </div>
            <div className={AboutMeStyles.CardContainerY}>
              <AboutMeCard/>
            </div>
        </div>
    </MarginLayout>
  )
}

export default AboutMe