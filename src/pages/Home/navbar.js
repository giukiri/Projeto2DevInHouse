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
                    <Link to='/lista'>Lista de Medicamentos</Link>
                </li>

                {/* inclui a rota de cadastro de Farmácias para facilitar a correção */}
                <li className="item">
                    <Link to='/informacoes'>Cadastro de Farmácias</Link>
                </li>
                
                <li className="item">
                    <Link to='/mapa'>Mapa</Link>
                </li>

            </ul>

       
    </nav>

    )

}

export default Navbar;
