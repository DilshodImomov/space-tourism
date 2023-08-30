import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = ({path, changePath}) => {
    const [menuState, setMenuState] = useState("hidden");
    const toggleMenu = () => {
        if ( menuState === "hidden" ) {
            setMenuState("visible");
        }
        else {
            setMenuState("hidden");
        }
    }
    return (
        <nav >
            <svg className="logo" xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>
            <div className="line"></div>
            <div className="navToggler" onClick={toggleMenu}>
                {menuState === "hidden"?<svg className="hamburger" xmlns="http://www.w3.org/2000/svg" width="24" height="21"><g fill="#D0D6F9" fill-rule="evenodd"><path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z"/></g></svg>:<svg className="close" xmlns="http://www.w3.org/2000/svg" width="20" height="21"><g fill="#D0D6F9" fill-rule="evenodd"><path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z"/><path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z"/></g></svg>}
            </div>
            <ul className={menuState}>
                
                    <Link to={""} onClick={() => changePath("home")}><li className={path === 'home'?"active":""}><strong>00</strong>HOME</li></Link>
                
                    <Link to={"/destination"} onClick={() => changePath("destination")}><li className={path === 'destination'?"active":""}><strong>01</strong>DESTINATION</li></Link>
                    <Link to={"/crew"} onClick={() => changePath("crew")}><li className={path === 'crew'?"active":""}><strong>02</strong>CREW</li></Link>
                    <Link to={"/technology"} onClick={() => changePath("technology")}><li className={path === 'technology'?"active":""}><strong>03</strong>TECHNOLOGY</li></Link>
            </ul>
        </nav>
    );
}

export default Navbar;