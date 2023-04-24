import "../css/banner.css";
import logo from "../assets/logo.png"
import Recommendation from "./Recommendation";

function Banner() 
{
    const TITLE = 'La maison jungle'
    return (
    <div className="lmj-banner">
        <div className="lmj-banner-row">
            <img src={logo} alt="La maison jungle logo" className="lmj-logo" />
            <h1 className="lmj-title">{ TITLE }</h1>
        </div>
        <Recommendation/>
    </div>
    )
}

export default Banner;