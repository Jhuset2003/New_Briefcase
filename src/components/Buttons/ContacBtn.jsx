import React from 'react'
import { NavLink } from 'react-router-dom';
import BtnStyles from "./BtnStyles/BtnStyles.module.css"
import { MdContactPhone } from 'react-icons/md';

function ContacBtn() {
  return (
    <div className={BtnStyles.BtnContainer}>
      <NavLink to="/Contac" className={BtnStyles.BtnContent}>
        <i><MdContactPhone/></i>
        <p>Contactame</p> 
        </NavLink>
    </div>
  )
}

export default ContacBtn;