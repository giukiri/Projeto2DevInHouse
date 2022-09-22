import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({}) ;

export const AuthProvider = ({children}) => {

    const [usuario,setUsuario] = useState();

    useEffect(()=>{

    const usuarioToken = localStorage.getItem("usuario_token");
    const usuarioStorage = localStorage.getItem("usuario_db");

    if(usuarioToken && usuarioStorage) {

        const hasUsuario = JSON.parse(usuarioStorage)?.filter(
            (usuario) => usuario.email ===JSON.parse(usuarioToken).email 

        );

        if(hasUsuario) setUsuario(hasUsuario[0]);

    }

},[]);

    const Login = (email,senha) => {

        const usuarioStorage =JSON.parse(localStorage.getItem("usuario_db"));

        const hasUsuario = usuarioStorage?.filter((usuario)=> usuario.email === email);

        if(hasUsuario?.length){
            if(hasUsuario[0].email === email && hasUsuario[0].senha === senha){
            const token = Math.random().toString(36).substring(2);
            localStorage.setItem("usuario_token", JSON.stringify({email,token}));
            setUsuario({email,senha});
            return;
        } 
        else{
            return "email ou senha incorretos";
        };
        
     } else {
            return "usuario não cadastrado";
        }
    };

    const CadastroUsuario = (email,senha) => {
        const usuarioStorage = JSON.parse(localStorage.getItem("usuario_db"));

        const hasUsuario = usuarioStorage?.filter((usuario)=>usuario.email===email);

        if(hasUsuario?.length){
            return "Já existe uma consta com este email"
        }
        let newUsuario;

        if(usuarioStorage){
            newUsuario = [...usuarioStorage,{email,senha}];
        } else{
            newUsuario = [{email,senha}];
        }
        localStorage.setItem("usuario_db",JSON.stringify(newUsuario));

        return;

    }

    const Deslogar = () => {
        setUsuario(null);
        localStorage.removeItem("usuario_token");
    };

    return (
        <AuthContext.Provider
        value={{usuario, signed : !!usuario,Login,CadastroUsuario,Deslogar}}>
            {children}
        </AuthContext.Provider>
    )
}