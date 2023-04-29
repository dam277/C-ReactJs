import { plantList } from "../datas/plantList";
import PlantItem from "./PlantItem";
import "../styles/shoppingList.css";
import monstera from "../assets/monstera.jpg";

function ShoppingList() 
{
    /* const */ let categories = [];
    // Recuperer uneiquement les categories uniques de la liste de plant
    // plantList.forEach(plant => 
    // {
    //     if(!categories.includes(plant.category)) 
    //     {
    //         categories.push(plant.category);
    //     }
    // });
    categories = plantList.reduce
    (
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

    return (
        <div>
            <ul>
                {
                    categories.map((category) => (
                        <li key={category}>
                            {category}
                        </li>
                    ))
                }
            </ul>
            <ul className="lmj-plant-list">
                {
                    plantList.map((plant) => (
                        <PlantItem name={plant.name} cover={monstera} id={plant.id} water={plant.water} light={plant.light} />
                    ))
                }
            </ul>
        </div>
    )
}

export default ShoppingList