
import React, {useState}  from "react";
import { Link } from "react-router-dom";
import {useForm} from 'react-hook-form';

const InformaçõesGerais = () => {

     const [razaoSocial, setRazaoSocial] = useState("");
     const [cnpj,setCnpj] = useState("");
     const [nomeFantasia,setNomeFantasia] = useState("");
     const [telefone,setTelefone] = useState("");
     const [celular,setCelular] = useState("");
     const [cep,setCep] = useState("");
     const [logradouro,setLogradouro] = useState("");
     const [numero,setNumero] = useState("");
     const [bairro,setBairro] = useState("");
     const [cidade,setCidade] = useState("");
     const [estado,setEstado] = useState("");
     const [Complemento,setComplemento] = useState("");
     const [latitude,setLatitude] = useState("");
     const [longitude,setLongitude] = useState("");

    const {register,handleSubmit,setValue,setFocus} = useForm();

    const onSubmit = (e) => {
       
    }

    const checkCEP = (e) =>{
    const cep = e.target.value.replace(/\D/g, '');
    fetch(`viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data =>{
        setValue('rua',data.logradouro);
        setValue('bairro',data.bairro);
        setValue('cidade',data.cidade);
        setValue('estado', data.estado);
        setFocus('numero');
    })

    }

    const chamarProximo = () => {
        return <Link to= '/cadastro' ></Link>
    }



    // const salvarFormulario = () => {
    //     const usuarioInfos = 
    //     const        
    //     ("Razão Social: " , JSON.stringify(razaoSocial)),
    //     ("CNPJ: " , cnpj),
    //     ("Nome Fantasia: ", nomeFantasia),
    //     ("Telefone: " , telefone),
    //     ("Celular : " , celular),
    //     ("CEP: ", cep),
    //     ("Logradouro: " , logradouro),
    //     ("Numero: ", numero),
    //     ("Bairro: ", bairro),
    //     ("Cidade: ",cidade),
    //     ("Estado: ",estado),
    //     ("Complemento :" , Complemento),
    //     ("Geolocalização: ", latitude,longitude)
    // );
    
    //     localStorage.setItem( "usuario_infos", JSON.stringify(newUsuario)

     
    // }

    return (

     <div className="pai">

        <form onSubmit={handleSubmit(onSubmit)}>

            <h1>Cadastro de nova Farmácia</h1>

                <h2>Informações sobre a sua Farmacia</h2>

            <div>
                 <label htmlFor="RazãoSocial" className="RazãoSocial"> Razão Social: </label>
                       
                        <input 
                        required
                        placeholder="digite a Razão Social da sua farmacia"
                        name="RazãoSocial" type='text' className="RazãoSocial" 
                        onChange={(e)=>setRazaoSocial(e.target.value)}
                        value={razaoSocial}
                        ></input>
           </div>

           <div>

                <label htmlFor="CNPJ" className="CNPJ"> CNPJ</label>
                        <input 
                        required
                        placeholder="digite o CNPJ da sua farmacia"
                        name="text" type='name' className="CNPJ" 
                        onChange={(e)=> setCnpj(e.target.value)}
                        value = {cnpj}
                        ></input>
           </div>

           <div>
   
                <label htmlFor="NomeFantasia" className="NomeFantasia"> NomeFantasia</label>
                        <input 
                        required
                        placeholder="digite o NomeFantasia da sua farmacia"
                        name="NomeFantasia" type='text' className="NomeFantasia" 
                        onChange={(e)=> setNomeFantasia(e.target.value)}
                        value = {nomeFantasia}
                        ></input>
           </div>

           <div>
                <label htmlFor="Telefone" className="Telefone"> Telefone</label>
                        <input 
                        placeholder="digite o Telefone com DDD da sua farmacia"
                        name="Telefone" type='text' className="Telefone" 
                        onChange={(e)=> setTelefone(e.target.value)}
                        value = {telefone}
                        ></input>
           </div>

           <div>
                <label htmlFor="Celular" className="Celular"> Celular</label>
                        <input 
                        required
                        placeholder="digite o Celular da sua farmacia"
                        type='text' className="Celular" 
                        onChange={(e)=> setCelular(e.target.value)}
                        value = {celular}
                        ></input>
            </div>

                <h2>Informações Sobre a localização da sua Farmacia</h2>
            
            <div>
                <label htmlFor="CEP">CEP</label>
                    <input
                    required
                    type="text" className="CEP"
                    {...register("cep")}
                    onBlur={checkCEP}
                    onChange={(e)=> setCep(e.target.value)}
                    value = {cep}
                    ></input>
            </div>

            <div>
           
                <label htmlFor="Logradouro">Logradouro</label>
                    <input
                    required
                    type="text" className="Logradouro"
                    {...register("logradouro")}
                    onChange={(e)=> setLogradouro(e.target.value)}
                        value = {logradouro}
                    ></input>
            </div>

            <div>
          
                <label htmlFor="Numero">Numero</label>
                    <input
                    required
                    name="Numero"
                    type="text" className="Numero"
                    onChange={(e)=> setNumero(e.target.value)}
                    value = {numero}
                    ></input>
            </div>

            <div>
                <label htmlFor="Bairro">Bairro</label>
                    <input
                    required
                    name="Bairro"
                    type="Bairro" className="Bairro"
                    onChange={(e)=> setBairro(e.target.value)}
                    value = {bairro}
                    ></input>
            </div>

            <div>
         
                <label htmlFor="Cidade">Cidade</label>
                    <input
                    required
                    name="Cidade"
                    type="Cidade" className="Cidade"
                    onChange={(e)=> setCidade(e.target.value)}
                    value = {cidade}
                    ></input>
            </div>

            <div>
                <label htmlFor="Estado">Estado</label>
                    <input
                    required
                    name="Estado"
                    type="Estado" className="Estado"
                    onChange={(e)=> setEstado(e.target.value)}
                    value = {estado}
                    ></input>
            </div>

            <div>
                <label htmlFor="Complemento">Complemento</label>
                    <input
                    name="Complemento"
                    type="Complemento" className="Complemento"
                    onChange={(e)=> setComplemento(e.target.value)}
                    value = {Complemento}
                    ></input>
            </div>

            <div>
                <label htmlFor="Geolocalização">Geolocalização</label>
                    <input
                    type="text" className="Latitude"
                    onChange={(e)=> setLatitude(e.target.value)}
                    value = {latitude}
                    ></input>

                    <input
                    type="text" className="Longitude"
                    onChange={(e)=> setLongitude(e.target.value)}
                    value = {longitude}
                    ></input>
            </div>

            <div>
               
            
                <button onClick={chamarProximo}>Próximo</button>
                 
            </div>

            <input type='submit' onSubmit={handleSubmit}></input>

         </form>

    </div> 
         
)
            };


            export default InformaçõesGerais;

       

