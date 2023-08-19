import "./Technology.css";
import vehicle1 from "../../assets/technology/image-launch-vehicle-portrait.jpg"
import vehicle2 from "../../assets/technology/image-spaceport-portrait.jpg"
import vehicle3 from "../../assets/technology/image-space-capsule-portrait.jpg"
import data from "../../data.json";
import { useState } from "react";
const Technology = () => {
    const vehicleImg = [vehicle1, vehicle2, vehicle3];;
    const [vehicleNum, setVehicleNum] = useState(0);
    const technologyData = data.technology;
    return (
        <div className="container">
            <div className="terminologyBlock">
                <div className="technologyHeading">
                    <strong>03</strong>SPACE LAUNCH 101
                </div>
                <div className="vehicleBlock">
                    <div className="vehicleNumbers">
                        <p className={vehicleNum === 0?"active":""} onClick={() => setVehicleNum(0)}>1</p>
                        <p className={vehicleNum === 1?"active":""} onClick={() => setVehicleNum(1)}>2</p>
                        <p className={vehicleNum === 2?"active":""} onClick={() => setVehicleNum(2)}>3</p>
                    </div>
                    <div className="vehicleDescription">
                        <p className="vehicleHeading">THE TERMINOLOGY…</p>
                        <p className="vehicleName">{technologyData[vehicleNum].name}</p>
                        <p className="vehicleText">{technologyData[vehicleNum].description}</p>
                    </div>
                </div>
            </div>
            <div className="vehicleImgBlock">
                <img src={vehicleImg[vehicleNum]} alt="" />
            </div>
        </div>
    );
}
export default Technology;