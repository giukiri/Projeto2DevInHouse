import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({}) ;

export const AuthProvider = ({children}) => {

    const [usuario,setUsuario] = useState();

    // Cuidado ao misturar português com inglês, pois acaba ficando confuso

    // as variáveis usuarioStorage e usuarioStorage deveriam ser declaradas aqui, pois sempre sem repetem
    // const usuarioToken = localStorage.getItem("usuario_token"); // {email,token}
    // const usuarioStorage = localStorage.getItem("usuario_db");

    // hasUsuario também poderia ser declarada aqui, como uma função que recebe parâmetro, por exemplo
    // const verificaSeExisteUsuario = (email) => JSON.parse(usuarioStorage)?.filter((usuario) => usuario.email === email);
    
    useEffect(()=>{
        const usuarioToken = localStorage.getItem("usuario_token"); // {email,token}
        const usuarioStorage = localStorage.getItem("usuario_db"); // [{email,senha}, {email,senha}]
        
        const verificaSeExisteUsuario = (email) => JSON.parse(usuarioStorage)?.filter((usuario) => usuario.email === email);
        
        console.log({usuarioToken,usuarioStorage}, !!usuarioToken, !!usuarioStorage);
        
        if(usuarioToken && usuarioStorage) {
            
            // aqui dentro é só usar a função reaproveitável
            const hasUsuario = verificaSeExisteUsuario(JSON.parse(usuarioToken).email);
        // const hasUsuario = JSON.parse(usuarioStorage)?.filter(
        //     (usuario) => usuario.email ===JSON.parse(usuarioToken).email 

        // );
        console.log({hasUsuario});

        if(hasUsuario) setUsuario(hasUsuario[0]);

    }

},[]);

    // variveis e funções deve começar com letra minúscula - apenas componentes com letra maiúscula
    const Login = (email,senha) => {

        const usuarioStorage =JSON.parse(localStorage.getItem("usuario_db"));  // [{email,senha}, {email,senha}]

        const hasUsuario = usuarioStorage?.filter((usuario)=> usuario.email === email);

        console.log({hasUsuario}, hasUsuario?.length);

        if(hasUsuario?.length){
            if(hasUsuario[0].email === email && hasUsuario[0].senha === senha){
            const token = Math.random().toString(36).substring(2);
            localStorage.setItem("usuario_token", JSON.stringify({email,token}));
            setUsuario({email,senha});
            return;
        } 
        else{
            // como isso é tratatdo no front?
            return "email ou senha incorretos";
        };
        
     } else {
            return "usuario não cadastrado";
        }
    };

    const CadastroUsuario = (email,senha) => {
        const usuarioStorage = JSON.parse(localStorage.getItem("usuario_db")); // [{email,senha}, {email,senha}]

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

        console.log({hasUsuario, newUsuario}, hasUsuario?.length);
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
