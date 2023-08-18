import "./Home.css";
const Home = () => {
    return (
        <div className="container">
            <div className="spaceBlock">
                <div className="texts">
                    <h1 className="upperText">SO, YOU WANT TO TRAVEL TO</h1>
                    <h1 className="bigText">SPACE</h1>
                    <div className="lowerText">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</div>
                </div>
            </div>
            <div className="exploreBlock">
                <div className="hoverBg">
                    <div className="circle">
                        <p>EXPLORE</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;