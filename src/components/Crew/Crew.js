import "./Crew.css";
import crew1 from "../../assets/crew/image-douglas-hurley.png"
import crew2 from "../../assets/crew/image-mark-shuttleworth.png"
import crew3 from "../../assets/crew/image-victor-glover.png"
import crew4 from "../../assets/crew/image-anousheh-ansari.png"
import data from "../../data.json";
import { useState } from "react";
const Destination = () => {
    const [crewNum, setCrewNum] = useState(0);
    const crewImg = [crew1, crew2, crew3, crew4];
    const crewData = data.crew;
    return (
        <div className="container">
            <div className="crewInfoBlock">
                <div className="crewHeading">
                    <strong>02</strong>MEET YOUR CREW
                </div>
                <div className="crewRole">
                    {crewData[crewNum].role}
                </div>
                <div className="crewName">
                    {crewData[crewNum].name}
                </div>
                <div className="crewBio">
                    {crewData[crewNum].bio}
                </div>
                <svg className="slider" xmlns="http://www.w3.org/2000/svg" width="132" height="15" viewBox="0 0 132 15" fill="none">
                    <circle className={crewNum === 0?"active":""} onClick={() => setCrewNum(0)} cx="7.5" cy="7.5" r="7.5" fill="white"/>
                    <circle className={crewNum === 1?"active":""} onClick={() => setCrewNum(1)} cx="46.5" cy="7.5" r="7.5" fill="white"/>
                    <circle className={crewNum === 2?"active":""} onClick={() => setCrewNum(2)} cx="85.5" cy="7.5" r="7.5" fill="white"/>
                    <circle className={crewNum === 3?"active":""} onClick={() => setCrewNum(3)} cx="124.5" cy="7.5" r="7.5" fill="white"/>
                </svg>
            </div>
            <div className="imgBlock">
                <img src={crewImg[crewNum]} alt="" />
            </div>
        </div>
    );
}
export default Destination;