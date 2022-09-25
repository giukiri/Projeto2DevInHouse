import { Link } from "react-router-dom";
import '../Home/navBar.css'


function Navbar () {
    return (
        
    <nav className="navBar">
       

            <ul className="lista">

                <li className="item">
                    <Link to='/home'>Home</Link>
                </li>
                
                <li className="item">
                    <Link to= '/cadastroMedicamentos'> Cadastro de Medicamentos</Link>
                </li >
                
                <li className="item">
                    <Link to='/estoque'>Estoque de Medicamentos</Link>
                </li>
                
                <li className="item">
                    <Link to='/mapa'>Mapa</Link>
                </li>

            </ul>

       
    </nav>

    )

}

export default Navbar;