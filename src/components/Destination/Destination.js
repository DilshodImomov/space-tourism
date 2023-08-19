import "./Destination.css";
import planet1 from "../../assets/destination/image-moon.png"
import planet2 from "../../assets/destination/image-mars.png"
import planet3 from "../../assets/destination/image-europa.png"
import planet4 from "../../assets/destination/image-titan.png"
import data from "../../data.json";
import { useState } from "react";
const Destination = () => {
    const planetsImg = [planet1, planet2, planet3, planet4];
    const [planetNum, setPlanetNum] = useState(1);
    const destinationsData = data.destinations;
    console.log(destinationsData);
    return (
        <div className="container">
            <div className="planetBlock">
                <div className="destinationHeading">
                    <strong>01</strong>PICK YOUR DESTINATION
                </div>
                <div className="planetBox">
                    <img src={planetsImg[planetNum - 1]} alt="" />
                </div>
            </div>
            <div className="descriptionBlock">
                <div className="planetLinks">
                    <p className={planetNum === 1?"active":""} onClick={()=>setPlanetNum(1)}>MOON</p>
                    <p className={planetNum === 2?"active":""} onClick={()=>setPlanetNum(2)}>MARS</p>
                    <p className={planetNum === 3?"active":""} onClick={()=>setPlanetNum(3)}>EUROPA</p>
                    <p className={planetNum === 4?"active":""} onClick={()=>setPlanetNum(4)}>TITAN</p>
                </div>
                <div className="planetName">
                    <p>{destinationsData[planetNum - 1].name}</p>
                </div>
                <div className="planetText"> {destinationsData[planetNum - 1].description} </div>
                <div className="planetLine"></div>
                <div className="distanceBlock">
                    <div className="distanceKm">
                        <p className="distLabel">AVG. DISTANCE</p>
                        <p className="distNum">{destinationsData[planetNum - 1].distance}</p>
                    </div>
                    <div className="time">
                        <p className="distLabel">EST. TRAVEL TIME</p>
                        <p className="distNum">{destinationsData[planetNum - 1].travel}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Destination;