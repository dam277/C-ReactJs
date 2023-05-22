import { useState } from 'react'
import '../styles/footer.css'

function Footer() 
{
    const [inputValue, setInputValue] = useState("");

    function handleInput(event) 
    {
        setInputValue(event.target.value);
    }

    function handleBlur() 
    {
        if (!inputValue.includes("@")) 
        {
            alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse mail valide.");
        }
    }

    return (
        <footer className="lmj-footer">
            <div className='lmj-footer-elem'>
                Pour les passionnés de plantes
            </div>
            <div className='lmj-footer-elem'> Laissez-nous votre email : </div>
            <input placeholder='Entrez votre email' onChange={handleInput} value={inputValue} onBlur={handleBlur} />
        </footer>
    )
}

export default Footer;