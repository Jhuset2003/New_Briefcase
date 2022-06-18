import React from 'react'
import { NavLink } from 'react-router-dom';
import BtnStyles from "./BtnStyles/BtnStyles.module.css"
import { MdWork } from 'react-icons/md';

function WorksBtn() {
  return (
    <div className={BtnStyles.BtnContainer}>
      <NavLink to="/Works" className={BtnStyles.BtnContent}>
        <i><MdWork/></i>
      <p>Proyectos</p> 
      </NavLink>
    </div>
  )
}

export default WorksBtn;