function Recomendation()
{
    const curentMonth = new Date().getMonth();
    const isSpring = curentMonth >= 2 && curentMonth <= 5;

    if (!isSpring)
        return <div>Ce n'est pas le moment de rempoterl</div>

    return <div>C'est le printemps, rempotez !!!</div>
}

export default Recomendation;