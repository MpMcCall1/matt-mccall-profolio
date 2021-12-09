import react from 'react';
import './Navbar.css';
//font awesome import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome } from '@fortawesome/free-solid-svg-icons';
  


function Navbar() {
    return(
<nav className="navbar navbar-expand-lg navbar-light bg-dark">
    <div className="container">
        {/* <a className="navbar-brand" href="#"><FontAwesomeIcon className="logo" icon={faHome} size="lg" alt="Home" /></a> */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon className="hamBar" icon={faBars}/>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto ">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">About Me</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Projects</a>
                </li>
                 <li className="nav-item">
                    <a className="nav-link" href="#">Contact Me</a>
                 </li>
            </ul>
        </div>
  </div>
</nav>
    ) 
}

export default Navbar;