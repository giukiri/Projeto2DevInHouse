import React, { useState } from "react";
import { useNavigate, Link} from 'react-router-dom'
import useAuth from "../../hook/useAuth";
import '../Login/style.css'


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
   <div className="body">
       <div id="login" className="login_tela">
         <form>
            <h1 className="title_login">Login</h1>
                

                    <label htmlFor="email" className='email'> Email</label>
                    <br/>
                        <input 
                        
                        required
                        placeholder="usuario@email.com"
                        name="email" type='email' className="input" 
                        value={email} 
                        onChange={(e)=> [setEmail(e.target.value) , setError('')] }
                        ></input>
               
                        <br/>
                        <label className="senha" htmlFor="senha">Senha</label>
                        <br/>
                        <input
                        required 
                        minLength={8}
                        name="senha" type="password" className="input"
                        value={senha} onChange={(e)=>[setSenha(e.target.value), 
                        setError('')]}></input> 
                         <br/>
                        <label>{error}</label>
                        <br/>
                        <button className = 'btn' type='submit' onClick={handleLogin}>Acessar</button>
                        <br/>
                        <br/>
                        <label className="frase">Não tem uma conta?</label>
                        <br/>
                            <Link className="link1" to = "/informacoes" > Registre-se </Link>
               
            </form>    
        </div>
    </div>     
   
    )
}


export default Login