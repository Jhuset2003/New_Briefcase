import React from 'react'
import CVStyles from "./PagesStyles/CVStyles.module.css"
import MarginLayout from '../layout/MarginLayout'
import CVCard from '../components/Cards/CVCard'

function CV() {
  return (
    <MarginLayout>
        <div className={CVStyles.container}>
            <div className={CVStyles.letter}>
                <h1>Curriculum</h1>
            </div>
            <div className={CVStyles.CardContainerY}>
                  <section className={CVStyles.PersonalInformation}>
                    <h3>Informacion Personal</h3>
                    <ul>
                      <li><p><strong>Nombres: </strong>Albert Jhuset</p></li>
                      <li><p><strong>Apellidos: </strong>Quintanilla Peralta</p></li>
                      <li><p><strong>Edad: </strong>19 años </p></li>
                      <li><p><strong>Experiencia: </strong>6 meses</p></li>
                      <li><p><strong>Especialidad: </strong>FrontEnd</p></li>
                    </ul>
                  </section>
                  <section className={CVStyles.SoftSkills}>
                    <h3>Habilidades blandas</h3>
                    <ul>
                      <li><p>Compañerismo</p></li>
                      <li><p>Resolucion de problemas</p></li>
                      <li><p>Esfuerzo</p></li>
                      <li><p>Eficiencia</p></li>
                      <li><p>Sereno</p></li>
                      <li><p>Aprendizaje rapido</p></li>
                    </ul>
                  </section>
                  <section className={CVStyles.Skills}>
                    <h3>Habilidades</h3>
                    <div className={CVStyles.ContentX}>
                      <CVCard/>
                    </div>
                  </section>
                  <section className={CVStyles.Donwload}>
                    <h3>Descargar CV</h3>
                    <button>Descargar</button>
                  </section>
            </div>
        </div>
    </MarginLayout>
  )
}

export default CV