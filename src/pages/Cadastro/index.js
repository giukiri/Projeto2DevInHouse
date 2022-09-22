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

        alert("usuario cadastrado com sucesso");
        navigate("/")


    }
    return(
      

    <div id="cadastro" className="cadastro">
          
        <h1 className="title_cadastro">Cadastre sua Farmacia no PharmacyManagement</h1>

                <div className="infos_Gerais">
                    <h2>Informações importantes da sua farmacia</h2>
                     {/* <div> */}
                        
                        {/* <label htmlFor="RazãoSocial" className="RazãoSocial"> RazãoSocial</label>
                            <input 
                            required
                            placeholder="digite a Razão Social da sua farmacia"
                            name="RazãoSocial" type='name' className="RazãoSocial" 
                            ></input>
                    </div>

                    <div>
                        
                        <label htmlFor="CNPJ" className="CNPJ"> CNPJ</label>
                            <input 
                            required
                            placeholder="digite o CNPJ da sua farmacia"
                            name="CNPJ" type='name' className="CNPJ" 
                            ></input>
                    </div> */}


                    {/* <div>
                        
                        <label htmlFor="NomeFantasia" className="NomeFantasia"> NomeFantasia</label>
                            <input 
                            required
                            placeholder="digite o NomeFantasia da sua farmacia"
                            name="NomeFantasia" type='name' className="NomeFantasia" 
                            ></input>
                    </div> */}

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

                    {/* <div>
                        
                        <label htmlFor="Telefone" className="Telefone"> Telefone</label>
                            <input 
                            placeholder="digite o Telefone com DDD da sua farmacia"
                            name="Telefone" type='number' className="Telefone" 
                            ></input>
                    </div>

                    <div>
                        
                        <label htmlFor="Celular" className="Celular"> Celular</label>
                            <input 
                            required
                            placeholder="digite o Celular da sua farmacia"
                            name="Celular" type='name' className="Celular" 
                            ></input>
                    </div> */}



                <div className="container_senha">
                        <label htmlFor="senha">Senha</label>
                        <input
                        required 
                        name="senha" type="password" className="email"
                        value={senha} onChange={(e)=>[setSenha(e.target.value), 
                        setError('')]}></input> 
                </div>

         
                {/* </div>
            
                <div className="infos_localizacao">
                    <h2>Informações Sobre a localização da sua farmacia</h2>
                <div>
                    <label htmlFor="CEP">CEP</label>
                        <inpu
                        required
                        name="CEP"
                        type="CEP" className="CEP"
                        ></inpu>
                    
                </div>

                <div>
                    <label htmlFor="Logradouro">Logradouro</label>
                        <inpu
                        required
                        name="Logradouro"
                        type="Logradouro" className="Logradouro"
                        ></inpu>
                    
                </div>

                <div>
                    <label htmlFor="Numero">Numero</label>
                        <inpu
                        required
                        name="Numero"
                        type="Numero" className="Numero"
                        ></inpu>
                    
                </div>

                <div>
                    <label htmlFor="Bairro">Bairro</label>
                        <inpu
                        required
                        name="Bairro"
                        type="Bairro" className="Bairro"
                        ></inpu>
                    
                </div> */}

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