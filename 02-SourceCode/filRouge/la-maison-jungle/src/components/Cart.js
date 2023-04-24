import "../css/cart.css";

function Cart() {
    const MONSTERAPRICE = 8;
    const IVYPRICE = 10;
    const FLOWERPRICE = 15;

    return (
        <div className="lmj-cart">
            <h2>Panier</h2>
            <ul>
                <li>Monstera : { MONSTERAPRICE }</li>
                <li>Lierre : { IVYPRICE }</li>
                <li>Fleurs : { FLOWERPRICE }</li>
            </ul>
            Total : { MONSTERAPRICE + IVYPRICE + FLOWERPRICE }
        </div>
    )
}

export default Cart;