import "../styles/plantItem.css";
import CareScale from "./CareScale";

function PlantItem({ name, cover, id, water, light })
{
    return (
        <li key={id} className="lmj-plant-item" onClick={HandleClick}>
            <h3>{ name }</h3>
            <img className="lmj-plant-item-cover" src={ cover } alt="Fleur" />
            <div>
                <CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
            </div>
        </li>
    )
}

function HandleClick(e) 
{
    alert(`Voulez-vous acheter 1 ${e} ? Cool `);
    console.log(e);
}

export default PlantItem;