import icon from './img/icon.png' ;
import './style.css' ;

const NavBar = () => {
    return (
        <div>
            <a href="#">
                <img src={icon} alt="logotipo" className='logo'/>
            </a>

            <div>
                <a href="#">Tienda</a>
                <a href="#">Quienes somos</a>
                <a href="#">Preguntas frecuentes</a>
            </div>
        </div>
    )
}

export default NavBar;