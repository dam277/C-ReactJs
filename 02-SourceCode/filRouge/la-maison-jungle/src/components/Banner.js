import "../styles/banner.css";
import logo from "../assets/logo.png";
import Recomendation from "./Recommendation";

function Banner()
{
    const title = "La maison jungle";
    return (
        <div className="lmj-banner ">
            <div>
                <img src={logo} alt="la maison jungle" className="lmj-logo"/>
                <h1 className="lmj-title">{title}</h1> 
            </div>
            <Recomendation />
        </div>
    )
}

export default Banner;