import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './h.css'

export default function NavBar() {
  const [mode,setmode]=useState('white')
  function hover(e) {
    e.target.style.color = 'white';
  }
  function ondown(e) {
      e.target.style.color = 'black';
    }
  function darkmode(){
      console.log("changed to dark");
      document.body.style.color='white'
      document.body.style.backgroundColor='#1d1717'
      setmode('dark')
  }
  function lightmode(){
    console.log("changed");
    document.body.style.color='black'
    document.body.style.backgroundColor='white'
    setmode('white')
}
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-dark ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" onMouseOver={hover} onMouseLeave={ondown}>NewsToday</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link  className="nav-link" to="/tech" onMouseOver={hover} onMouseLeave={ondown}>TechCrunch</Link>
              </li>
              <li className="nav-item">
                <Link  className="nav-link" to="/entertainment" onMouseOver={hover} onMouseLeave={ondown}>entertainment</Link>
              </li>
              <li className="nav-item">
                <Link  className="nav-link" to="/business" onMouseOver={hover} onMouseLeave={ondown}>Business</Link>
              </li>
              <li className="nav-item">
                <Link  className="nav-link" to="/health" onMouseOver={hover} onMouseLeave={ondown}>Health</Link>
              </li>
              <li className="nav-item">
                <Link  className="nav-link" to="/science" onMouseOver={hover} onMouseLeave={ondown}>Science</Link>
              </li>
              <li className="nav-item">
                <Link  className="nav-link" to="/sports" onMouseOver={hover} onMouseLeave={ondown} >Sports</Link>
              </li>
            </ul>
              <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={mode==='white'?darkmode:lightmode}/>{mode}Enabled
              {/* <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Default switch checkbox input</label>
             */}</div> 
          </div>
        </div>
        
      </nav>
</div>
    )
  }