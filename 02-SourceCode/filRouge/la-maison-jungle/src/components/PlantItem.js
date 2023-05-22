import "../styles/plantItem.css";
import CareScale from "./CareScale";

function PlantItem({ name, cover, id, water, light })
{
    return (
        <li key={id} className="lmj-plant-item" onClick={() => HandleClick(name)}>
            <h3>{ name }</h3>
            <img className="lmj-plant-item-cover" src={cover} alt={`${name} cover`} />
            <div>
                <CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
            </div>
        </li>
    )
}

function HandleClick(plantName) 
{
    alert(`Voulez-vous acheter 1 ${plantName} ? Très bon choix`);
}

export default PlantItem;