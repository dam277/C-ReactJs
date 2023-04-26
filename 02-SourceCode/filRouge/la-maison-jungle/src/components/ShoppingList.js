import { plantList } from "../datas/plantList";
import "../styles/shoppingList.css";

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
                        <li key={plant.id} className="lmj-plant-item">
                            {plant.name}
                            {plant.isBestSale && <span>🔥</span>}
                            {plant.isSpecialOffer && <div className="lmj-sales">Soldes</div>}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ShoppingList