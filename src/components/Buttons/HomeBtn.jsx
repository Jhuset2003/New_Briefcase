import React from 'react'
import { NavLink } from 'react-router-dom';
import BtnStyles from "./BtnStyles/BtnStyles.module.css"
import { BiHomeAlt } from 'react-icons/bi';

function HomeBtn() {
  return (
    <div className={BtnStyles.BtnContainer}>
      <NavLink to="/" className={BtnStyles.BtnContent}>
        <i><BiHomeAlt/></i>
        <p>Home</p> 
        </NavLink>
    </div>
  )
}

export default HomeBtn;