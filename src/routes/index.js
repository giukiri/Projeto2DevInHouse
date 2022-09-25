import {Fragment} from "react";
import {BrowserRouter, Route , Routes} from "react-router-dom"
import HomePage from "../pages/Home";
import Login from "../pages/Login";
import CadastroUsuario from "../pages/Cadastro";
import useAuth from "../hook/useAuth";
import InformaçõesGerais from "../pages/Cadastro/informações";
import Mapa from "../pages/mapa/mapa";
import CadastroMedicamento from "../pages/cadastro_medicamentos/cadastroMedicamento";
import EstoqueMedicamentos from "../pages/estoque/estoqueMedicamentos";

const RotasApp = () => {

    const Private = ({Item}) => {
        
        const {signed} = useAuth()

        return  signed > 0 ? < Item /> : <Login /> 

    };
    return(
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route exact path="/home"  element={<Private Item={HomePage}/>}/>
                    <Route path="/" element={<Login/>} />
                    <Route exact path="/cadastro" element={<CadastroUsuario/>}/>
                    <Route exact path="/informacoes" element={<InformaçõesGerais/>} />
                    <Route path="*" element={<Login />} />
                    <Route exact path="/cadastroMedicamentos" element={<CadastroMedicamento/>}/>
                    <Route exact path="/estoque" element={<EstoqueMedicamentos/>}/>
                    <Route exact path="/mapa" element={<Mapa/>} />
                </Routes>
            </Fragment>
        </BrowserRouter>

    )
};

export default RotasApp;