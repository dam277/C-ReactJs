import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

function CareScale({ careType, scaleValue }) 
{
    const range = [1, 2, 3]
    const scaleType = careType === "light" ? <img src={Sun} alt='sun-icon' /> : <img src={Water} alt='water-icon' />;

    return (
        <div onClick={() => HandleClick(careType, scaleValue)}>
            {range.map((rangeElem) =>
                scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
            )}
        </div>
    )
}

function HandleClick(type, value) 
{
    
}

export default CareScale