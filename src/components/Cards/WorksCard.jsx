import {React, useState } from 'react'
import WorksCardStyles from "./CardsStyles/WorksCard.module.css"
import { FaPager } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import { CgCloseR } from 'react-icons/cg';


import Vased from "../../Img/Vased.png"
import ToDoList from "../../Img/TodoListMERN.png"
import ToquenElDom from "../../Img/ToquenElDom.png"
import CRUDo from "../../Img/CRUDo.png"


function WorksCard() {
  const [openModal, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState(null);
  const Info = [
    {
      Title : "Vased Web",
      Img : Vased,
      LinKPage : "https://vased-web.vercel.app",
      LinkHub: "https://github.com/Jhuset2003/VasedWeb"

    },
    {
      Title : "To Do List",
      Img : ToDoList,
      LinKPage : "https://app-client-2.herokuapp.com/edit/624b496314f85b043d3553b3",
      LinkHub: "https://github.com/Jhuset2003/To_Do_List"

    },
    {
      Title : "Toquen el DOM",
      Img : ToquenElDom,
      LinKPage : "https://elastic-perlman-4b5cea.netlify.app",
      LinkHub: "https://github.com/Jhuset2003/toquenElDOM"

    },
    {
      Title : "CRUDo",
      Img : CRUDo,
      LinKPage : "https://crudaj-db.000webhostapp.com/CRUDo/index.php?c=inicio",
      LinkHub: "https://github.com/Jhuset2003/CRUDo"

    },
  ]

  return (
    <div className={WorksCardStyles.container}>
      {Info.map((info)=>(
        <div className={WorksCardStyles.WorkCard}>
          <div className={WorksCardStyles.Line}></div>
        <div className={WorksCardStyles.title}>
            <h3>{info.Title}</h3>
        </div>
        <div className={WorksCardStyles.img} >
            <img src={info.Img} alt=""  onClick={(e) => {e.stopPropagation(); setOpenModal(true); setModalData(info);}}/>
            <>
              {(openModal ) &&
                  <div className={WorksCardStyles.modal} >
                    <i className={WorksCardStyles.CloseIcon}><CgCloseR onClick={(e) => {e.stopPropagation(); setOpenModal(false)}} /></i>
                    <img src={modalData.Img} alt="" />
                  </div>}
            </>
        </div>
        <div className={WorksCardStyles.links}>
              <a href={info.LinKPage} target="_blank"><h4>Ver <i><FaPager/></i></h4></a>
              <a href={info.LinkHub} target="_blank"><h4>GitHub <i><AiFillGithub/></i></h4></a>
            </div>
    </div>
      ))}
        
    </div>
  )
}

export default WorksCard