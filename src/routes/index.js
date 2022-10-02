import {Fragment} from "react";
import {BrowserRouter, Route , Routes} from "react-router-dom"
import HomePage from "../pages/Home";
import Login from "../pages/Login";
import CadastroUsuario from "../pages/Cadastro";
import useAuth from "../hook/useAuth";
import InformaçõesGerais from "../pages/Cadastro/informações";
import Mapa from "../pages/mapa/mapa";
import CadastroMedicamento from "../pages/cadastro_medicamentos/cadastroMedicamento";
import ListaMedicamentos from "../pages/lista/listaMedicamentos";
import Navbar from "../pages/Home/navbar";

// Isso é um componente - tem que ser declarado fora desse componente, seja no mesmo arquivo ou em arquvo separado
const Private = ({Item}) => {
    const {signed} = useAuth()

    // signed é um booleano, então não precisa fazer essa comparação
    return  signed > 0 ? < Item /> : <Login /> 

};

const RotasApp = () => {

    return(
        <BrowserRouter>
            {/* inclui a NavBar aqui apenas para facilitar a correção, e permitindo acessar as rotas */}
            <Navbar/>

            {/* Fragment não é necessário aqui */}
            <Fragment>
                <Routes>
                    {/* como você não usou react-router-dom para fazer a lógica das rotas privadas, 
                    precisava passar isso em todas as rotas que queria q fossem privadas, não apenas na home */}
                    <Route exact path="/home"  element={<Private Item={HomePage}/>}/>
                    
                    <Route path="/" element={<Login/>} />
                    <Route exact path="/cadastro" element={<CadastroUsuario/>}/>

                    {/* procure dar nomes mais claros as rotas e componentes, pois nesse caso trata-se do cadastro de farmácias */}
                    <Route exact path="/informacoes" element={<InformaçõesGerais/>} />

                    <Route path="*" element={<Login />} />
                    <Route exact path="/cadastroMedicamentos" element={<CadastroMedicamento/>}/>
                    <Route exact path="/lista" element={<ListaMedicamentos/>}/>
                    <Route exact path="/mapa" element={<Mapa/>} />
                </Routes>
            </Fragment>
        </BrowserRouter>

    )
};

export default RotasApp;
