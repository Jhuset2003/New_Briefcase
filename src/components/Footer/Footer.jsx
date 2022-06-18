import React from 'react'
import AboutBtn from '../Buttons/AboutBtn';
import ContacBtn from '../Buttons/ContacBtn';
import CVBtn from '../Buttons/CVBtn';
import HomeBtn from '../Buttons/HomeBtn';
import WorksBtn from '../Buttons/WorksBtn';
import CellMenu from './CellMenu/CellMenu'

import FooterStyles from "./FooterStyles.module.css"

function Footer() {
  const items = [
    {anchor: <HomeBtn/>},
    {anchor: <AboutBtn/>},
    {anchor: <WorksBtn/>},
    {anchor: <CVBtn/>},
    {anchor: <ContacBtn/>},
  ];
  return (
    <footer className={FooterStyles.Footer}>
          <div className={FooterStyles.Border} />
          <div className={FooterStyles.CircleExtract} />
          <CellMenu items={items} />
    </footer>
  )
}

export default Footer