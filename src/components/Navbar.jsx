import Logo from "../utils/Logo";

const Navbar = () => {
    return(
        <div className="navbar">
            <ul>
                <li><a href=""><Logo /></a></li>
                <li><a href="">Inicio</a></li>
                <li><a href="">Explorar</a></li>
                <li><a href="">Crear</a></li>
                <li><input type="search" /></li>
                <li><a href="">Usuario</a></li>
            </ul>
        </div>
    )
}

export default Navbar;