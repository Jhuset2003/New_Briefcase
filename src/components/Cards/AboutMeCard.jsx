import React from 'react'

import AboutMeCardStyle from "./CardsStyles/AboutMeCard.module.scss"

function AboutMeCard() {

  const Info = [
    {
      quetion : "¿Quien soy?",
      answare : "Mi nombre es Albert Quintanilla, soy una persona proactiva, excelente compañero de equipo, organizado y responsable. Busco nuevos desafíos para probarme y ganar experiencia con sus soluciones.",
    },
    {
      quetion : "¿Como inicie en la programación?",
      answare : "La manera en la cual conocí este mundo fue a través de un tutor que tuve y al cual estimo, que es un gran programador como también un gran instructor."
    },
    {
      quetion : "¿Mis hablidades?",
      answare : "Soy un desarrollador web FullStack, pero senti una gran atraccion por parte del FrontEnd, tengo conociminetos en React,MySql,GitHub,Python,Django,MongoDB y entre otros recursos como FramerMotion,Boostrap,Tailwind,NPM y Linux. "
    },
  ]
  return (
    <div className={AboutMeCardStyle.container}>
      {Info.map((info)=>(
        <div className={AboutMeCardStyle.card}>
        <div className={`${AboutMeCardStyle.face} ${AboutMeCardStyle.face1}`}>
          <div className={AboutMeCardStyle.content}>
            <p className={AboutMeCardStyle.letter}>{info.answare}</p>
          </div>
        </div>
        <div className={`${AboutMeCardStyle.face} ${AboutMeCardStyle.face2}`}>
          <h2>{info.quetion}</h2>
        </div>
      </div>

      )) }
    
    </div>
  
  )}

export default AboutMeCard