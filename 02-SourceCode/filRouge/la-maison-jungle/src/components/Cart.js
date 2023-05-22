import "../styles/cart.css";
import { useState, useEffect } from "react";

function Cart({ cart, updateCart }) 
{
    const [isOpen, setIsOpen] = useState(false);

    const total = cart.reduce((acc, plantType) => 
        acc + plantType.amount * plantType.price, 0);

    useEffect(() => 
    {
        document.title = `${total}.- d'achats dans le panier`;
    }, [total]);

    return isOpen ? (
        <div className="lmj-cart">
            <button className="lmj-cart-toggle-button" onClick={() => setIsOpen(false)}>Fermer</button>
            <h2>Panier</h2>
            {cart.map(({ name, price, amount }, index) => 
            (
                <div key={`${name}-${index}`}>
                    {name} {price}.- x {amount}
                </div>
                
            ))}
            <h3>Total : {total}</h3>
            <button className="lmj-cart-toggle-button" onClick={() => updateCart([])}>Vider le Panier</button>
        </div>
    ) : 
    (
        <div className="lmj-cart-closed">
            <button className="lmj-cart-toggle-button" onClick={() => setIsOpen(true)}>Ouvrir le Panier</button>
        </div>
    )
}

export default Cart;
