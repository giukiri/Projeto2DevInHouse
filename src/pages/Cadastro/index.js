import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hook/useAuth";

const CadastroUsuario = () => {
    const [email,setEmail] = useState("")
    const [emailConf,setEmailConf] = useState("")
    const [senha,setSenha] = useState("")
    const [error,setError] = useState("");
    const navigate = useNavigate();

    const {CadastroUsuario} = useAuth();

    const handleCadastro = () => {
        if(!email | !emailConf) {
            setError("Preencha todos os campos");
            return;
        } else if( email !== emailConf){
            setError("Os emails não são iguais");
            return;
        }

        const res = CadastroUsuario(email,senha);

        if(res){
            setError(res);
            return
        }

        alert("empresa cadastrado com sucesso");
        navigate("/")


    }
    return(
      

    <div id="cadastro" className="cadastro">
          
        <h1 className="title_cadastro">Cadastre sua Farmacia no PharmacyManagement</h1>

                <div className="infos_Gerais">
                    <h2>Informações importantes da sua farmacia</h2>
                
                    <div>

                    <label htmlFor="email" className="label_email"> Email</label>
                        <input 
                        required
                        placeholder="usuario@email.com"
                        name="email" type='email' className="email" 
                        value={email} 
                        onChange={(e)=> [setEmail(e.target.value) , setError('')] }
                        ></input>
                </div>

                <div>

                    <label htmlFor="email" className="label_email"> Email</label>
                        <input 
                        required
                        placeholder="Por favor, confirme seu email"
                        name="email" type='email' className="email" 
                        value={emailConf} 
                        onChange={(e)=> [setEmailConf(e.target.value) , setError('')] }
                        ></input>
                </div>

                <div className="container_senha">
                        <label htmlFor="senha">Senha</label>
                        <input
                        required 
                        name="senha" type="password" className="email"
                        value={senha} onChange={(e)=>[setSenha(e.target.value), 
                        setError('')]}>
                        </input> 
                </div>

                <div>
                            <label>{error}</label>
                            <button  onClick={handleCadastro}>Cadastre-se</button>
                </div>  

                <div>
                            <label>Ja tem uma conta?</label>
                            <Link to="/">Entre</Link>
                </div>

                </div>

        </div>

       )
       }
    


export default CadastroUsuario;