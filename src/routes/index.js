import {Fragment} from "react";
import {BrowserRouter, Route , Routes} from "react-router-dom"
import HomePage from "../pages/Home";
import Login from "../pages/Login";
import CadastroUsuario from "../pages/Cadastro";
import useAuth from "../hook/useAuth";

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
                    <Route path="*" element={<Login />} />
                </Routes>
            </Fragment>
        </BrowserRouter>

    )
};

export default RotasApp;