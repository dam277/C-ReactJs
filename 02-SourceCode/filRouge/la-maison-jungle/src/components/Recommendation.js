function Recommendation() 
{
    const CURRENTMONTH = new Date().getMonth();
    let isSpring = CURRENTMONTH >= 2 && CURRENTMONTH <= 5;

    if (!isSpring)
    {
        return <div>Ce n'est pas le moment de rempoter ! </div>    
    }
    return <div>C'est le moment de rempoter ! </div>
}

export default Recommendation;