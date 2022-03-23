import React,{ Component } from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link as Nv } from '@material-ui/core'

const Header=()=>{
    
 return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
 
  
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <div className="mr-auto"></div>
      <ul className="navbar-nav my-2 my-lg-0">
<li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-display="static" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Profile
        </a>
          <div className="dropdown-menu dropdown-menu-lg-right" aria-labelledby="navbarDropdown">
            <h6 className="dropdown-header">Dropdown header</h6>
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
          </div>

        </li>

      </ul>

      </div>
  </nav>

 )

};
 
export default Header