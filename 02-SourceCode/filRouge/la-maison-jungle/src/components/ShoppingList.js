import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'
import '../styles/shoppingList.css'
import Categories from './Categories';
import { useState } from 'react';


function ShoppingList({ cart, updateCart }) 
{
	const [plants, updatePlantCategory] = useState(plantList);

	function AddToCart(name, price) 
	{
		const currentPlantAdded = cart.find((plant) => plant.name === name)

		if (currentPlantAdded)
		{
			const cartFilteredCurrentPlant = cart.filter((plant) => plant.name !== name);
			updateCart([...cartFilteredCurrentPlant, {name, price, amount: currentPlantAdded.amount + 1}]);
		}
		else
		{
			updateCart([...cart, {name, price, amount: 1}]);
		}
	}

	function RemoveFromCart(name)
	{
		const currentPlantRemoved = cart.find((plant) => plant.name === name)

		if (currentPlantRemoved && currentPlantRemoved.amount > 1)
		{
			const cartFilteredCurrentPlant = cart.filter((plant) => plant.name !== name);
			updateCart([...cartFilteredCurrentPlant, {name, price: currentPlantRemoved.price, amount: currentPlantRemoved.amount - 1}])
		}
		else
		{
			updateCart(cart.filter((plant) => plant.name!== name));
		}
	}

	return (
		<div className='lmj-shopping-list'>
			<ul>
				<Categories plantList={plantList} updatePlantCategory={updatePlantCategory}/>
			</ul>
			<ul className='lmj-plant-list'>
				{plants.map(({ id, cover, name, water, light, price }) => 
                (
					<div>
						<PlantItem key={id} cover={cover} name={name} water={water} light={light} />
						<button onClick={() => AddToCart(name, price)}>Ajouter</button>
						<button onClick={() => RemoveFromCart(name)}>Retirer</button>
					</div>
				))}
			</ul>
		</div>
	)
}

export default ShoppingList