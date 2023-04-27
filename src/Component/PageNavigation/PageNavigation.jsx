import React from 'react'
import { NavLink } from 'react-router-dom';
import './pageNavigation.css'

const PageNavigation = ({title}) => {

  const style = {

  }
  return (
    <div srtyle={{fontSize:18}}>
        <NavLink to='/' className="Pagination-link">Home</NavLink>/
        <small style={{fontSize:18,fontWeight:600,textTransform:'capitalize'}}>{title}</small>
    </div>
  )
}

export default PageNavigation
