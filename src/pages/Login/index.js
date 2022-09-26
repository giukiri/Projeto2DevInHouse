import React, { useState } from "react";
import { useNavigate, Link} from 'react-router-dom'
import useAuth from "../../hook/useAuth";


function Login (){

    const {Login} = useAuth();
    const navigate = useNavigate();

    const [email,setEmail] = useState('');
    const [senha,setSenha] =useState ('');
    const [error,setError] = useState ('');


const handleLogin = () => {
    if(!email | ! senha){
        setError("Preencha todos os campos");
        return;
    }

    const res = Login(email,senha);
        if(res){
            setError(res)
            return
        }

        navigate("/home")
 };

    return(
    
       <div id="login" className="login">
         <form>
            <h1 className="title_login">Login</h1>
          
                <div className="container_email">

                    <label htmlFor="email" className="label_email"> Email</label>
                        <input 
                        required
                        placeholder="usuario@email.com"
                        name="email" type='email' className="email" 
                        value={email} 
                        onChange={(e)=> [setEmail(e.target.value) , setError('')] }
                        
                        ></input>
                </div>
                <div className="container_senha">
                        <label htmlFor="senha">Senha</label>
                        <input
                        required 
                        minLength={8}
                        name="senha" type="password" className="email"
                        value={senha} onChange={(e)=>[setSenha(e.target.value), 
                        setError('')]}></input> 
                </div>
                    <label>{error}</label>
                <div>
                    <button type='submit' onClick={handleLogin}>Acessar</button>
                </div>
                <div>

                <label>Não tem uma conta?</label>
                    <Link to = "/informacoes"> Registre-se </Link>
                </div>
            </form>    
        </div>
            
   
    )
}


export default Login