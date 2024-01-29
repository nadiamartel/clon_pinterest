import { useState } from "react";
import Logo from "../utils/Logo";
import { useBookStore } from "../store/bookStore";

const Navbar = () => {

    const [value, setValue] = useState("cat");

    const updateValue = useBookStore(state => state.updateValue)

    //para que tengamos que presionar enter para buscar
    const handleKey = (event) =>{
        if(event.key === "enter"){
            // console.log("presionar enter", value);
            updateValue(value);
        }
    }

    return(
        <div className="navbar">
            <ul>
                <li><a href=""><Logo /></a></li>
                <li><a href="">Inicio</a></li>
                <li><a href="">Explorar</a></li>
                <li><a href="">Crear</a></li>
                <li><input 
                    type="search"  
                    onChange={event => setValue(event.target.value)}
                    placeholder="Buscar"
                    onKeyDown={handleKey}
                    /></li>
                <li><a href="">Usuario</a></li>
            </ul>
        </div>
    )
}

export default Navbar;