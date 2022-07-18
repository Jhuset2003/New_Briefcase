import React, { useState, useEffect, useRef } from "react";
import CellMenuStyles from "./CellMenu.module.css";
import { CgMenuGridR,CgMenuGridO } from 'react-icons/cg';
import { BiHomeAlt } from 'react-icons/bi';
import { FaInfoCircle } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';
import { MdOutlineContactPage , MdContactPhone} from 'react-icons/md';
import { useLocation } from "react-router-dom";




function CellMenu({ items = [], dropdownTitle }) {
  const activatorRef = useRef(null);
  const dropdownListRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation()

  const clickHandler = () => {
    setIsOpen(!isOpen);
  };

  const keyHandler = (event) => {
    if (event.key === "Escape" && isOpen) {
      setIsOpen(false);
    }
  };

  const clickOutsideHandler = (event) => {
    if (dropdownListRef.current) {
      if (
        dropdownListRef.current.contains(event.target) ||
        activatorRef.current.contains(event.target)
      ) {
        return;
      }

      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      dropdownListRef.current.querySelector("div").focus();
      document.addEventListener("mousedown", clickOutsideHandler);
    } else {
      document.addEventListener("mousedown", clickOutsideHandler);
    }
  }, [isOpen]);

  return (
    <div className={CellMenuStyles.dropdown_wrapper} onKeyUp={keyHandler}>
      <div
        className={CellMenuStyles.dropdown_activator}
        aria-haspopup="true"
        aria-controls={dropdownTitle}
        onClick={clickHandler}
        ref={activatorRef}
        key="100"
      >
        {dropdownTitle}{" "}
        {isOpen ? 
            <CgMenuGridR/>
          
            : [
              location.pathname === "/" ?
              <BiHomeAlt/>:
              location.pathname === "/AboutMe" ? 
              <FaInfoCircle/>:
              location.pathname === "/Works" ?
              <MdWork/>:
              location.pathname ==="/CV" ?
              <MdOutlineContactPage/>:
              location.pathname === "/Contac" ?
              <MdContactPhone/>:
              <CgMenuGridO/>

            ]
            
        }
      </div>
      <ul 
        ref={dropdownListRef}
        className={`${CellMenuStyles.dropdown_item_list} ${isOpen ? CellMenuStyles.active : ""} `}
      >
        {items.map((item, index) => {
          return (
            <li className={CellMenuStyles.item_list} key={index}>
              <div onClick={clickHandler}>{item.anchor}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CellMenu;
