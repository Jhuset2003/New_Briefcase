import React from 'react'
import { NavLink } from 'react-router-dom';
import BtnStyles from "./BtnStyles/BtnStyles.module.css"
import { MdOutlineContactPage } from 'react-icons/md';

function CVBtn() {
  return (
    <div className={BtnStyles.BtnContainer}>
      <NavLink to="/CV" className={BtnStyles.BtnContent}>
        <i><MdOutlineContactPage/></i>
        <p> Mi Curriculum</p>
        </NavLink>
    </div>
  )
}

export default CVBtn;