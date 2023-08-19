import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({path, changePath}) => {
    return (
        <nav>
            <svg className="logo" xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>
            <div className="line"></div>
            <ul>
                
                    <Link to={""} onClick={() => changePath("home")}><li className={path === 'home'?"active":""}><strong>00</strong>HOME</li></Link>
                
                    <Link to={"/destination"} onClick={() => changePath("destination")}><li className={path === 'destination'?"active":""}><strong>01</strong>DESTINATION</li></Link>
                    <Link to={"/crew"} onClick={() => changePath("crew")}><li className={path === 'crew'?"active":""}><strong>02</strong>CREW</li></Link>
                    <Link to={"/technology"} onClick={() => changePath("technology")}><li className={path === 'technology'?"active":""}><strong>03</strong>TECHNOLOGY</li></Link>
            </ul>
        </nav>
    );
}

export default Navbar;