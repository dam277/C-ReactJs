function Categories({ plantList, updatePlantCategory }) 
{
    function handleChangeCategory(e) 
    {
        if (e.target.value === "all") 
            resetCategory();
        else
            updatePlantCategory(plantList.filter(plant => plant.category === e.target.value));
    }

    function resetCategory() 
    {
        updatePlantCategory(plantList);
    }

    return (
        <div>
            <select onChange={(e) => handleChangeCategory(e)}>
                <option value="all">Tout</option>
                {plantList.reduce((acc, plant) => 
                    acc.includes(plant.category) ? acc : acc.concat(plant.category), []
                ).map(category => 
                    <option key={category} value={category}>{category ? category : "---"}</option>)
                }
            </select>
            <button onClick={resetCategory}>Reinitialiser</button>
        </div>
    )
}

export default Categories;