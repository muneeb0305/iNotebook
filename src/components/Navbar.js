import React, {useEffect} from 'react';
import PropTypes from 'prop-types'
import {Link, useLocation} from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export default function Navbar(props){
  let navigate = useNavigate();
  const handleLogout=()=>{
    localStorage.removeItem('token');
    navigate("/login")
    props.showAlert("Logout Successfully","success")
  }
  let location = useLocation();
  useEffect(() => {}, [location]);
    return(
        <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand mb-0 h1" to="/">{props.title}</Link>
            <button className="btn btn-dark navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                   <Link className={`nav-link ${location.pathname==="/"? "active": ""}`} aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${location.pathname==="/about"? "active": ""}`} to="/about">About</Link>
                </li>
              </ul>
              {!localStorage.getItem('token')?<form className="d-flex">
                <Link className='btn btn-primary' to="/login" role="button">Login</Link>
                <Link className='btn btn-primary mx-2' to="/signup" role="button">Signup</Link>
              </form>:<button onClick={handleLogout} className="btn btn-primary">Logout</button>}
            </div>
          </div>
        </nav>
    )
}

Navbar.propTypes = {title: PropTypes.string.isRequired}
Navbar.defaultProps = { title: "Set title name"}