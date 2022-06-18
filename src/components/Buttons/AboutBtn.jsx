import React from 'react'
import { NavLink } from 'react-router-dom';
import BtnStyles from "./BtnStyles/BtnStyles.module.css"
import { FaInfoCircle } from 'react-icons/fa';

function AboutBtn() {
  return (
    <div className={BtnStyles.BtnContainer}>
      <NavLink to="/About" className={BtnStyles.BtnContent}>
        <i><FaInfoCircle/></i>
        <p>Acerca de mi</p> 
      
      </NavLink>
    </div>
  )
}

export default AboutBtn;