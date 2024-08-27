import React from 'react'
import { NavLink } from "react-router-dom";
import { FaBars, FaUserAlt } from "react-icons/fa";
import './Sidebar.css'

function Sidebar() {
  return (
    <>
         <div
      className="container"
      style={{ display: "flex", width: "auto", margin: "0px", padding: "0px" }}
    >
      <div  className="sidebar">
        <div className="top_section">
          <h1  className="logo">
            Logo
          </h1>
          <div  className="bars">
            <FaBars  />
          </div>
        </div>
        
          <NavLink
           
            key={index}
            className="sidemenulink"
            activeclassname="sidemenulink-active"
          >
            <div className="icon">{item.icon}</div>
            <div
              
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        
      </div>
      <main>{children}</main>
    </div>
    </>
  )
}

export default Sidebar
