
import React, {useEffect, useState}  from "react";
import { Link } from "react-router-dom";
import {useForm} from 'react-hook-form';
import '../Cadastro/style.css'

const InformaçõesGerais = () => {

    const RecuperarlocalStorage = () => {
        const data = localStorage.getItem('infos')
        if(data){
            return JSON.parse(data);
        }
        else{
            return [];
        }
    }
    

    // RecuperarlocalStorage é uma função, então deve ser chamada, além disso não pode ser colocada dentro de um aray
    const [infos,setInfos] = useState (RecuperarlocalStorage())

    const [razaoSocial,setRazaoSocial] =useState();
    const [cnpj,setCnpj] = useState();
    const [nomeFantasia,setNomeFantasia] = useState();
    const [telefone,setTelefone] =useState();
    const [celular,setCelular] =useState();
    const [cep,setCep] =useState();
    const [logradouro,setLogradouro] = useState();
    const [numero, setNumero] = useState();
    const [ bairro,setBairro] = useState();
    const [cidade,setCidade]= useState();
    const [estado,setEstado]= useState();
    const [Complemento,setComplemento] =useState();
    const [latitude,setLatitude] =useState ();
    const [longitude,setLongitude] = useState();

    
    const handleAddFarmacia = (e) => {
        e.preventDefault();

        let farmacia ={
            razaoSocial,
            cnpj ,
            nomeFantasia,
            telefone,
            celular,
            cep,
            logradouro,
            numero,
            bairro,
            cidade,
            estado,
            Complemento,
            latitude,
            longitude
    }

    setInfos([...infos,farmacia]);
    setRazaoSocial('');
    setCnpj('');
    setNomeFantasia('');
    setTelefone('');
    setCelular('');
    setCep('');
    setLogradouro('')
    setNumero('');
    setBairro('');
    setCidade('')
    setEstado('');
    setComplemento('');
    setLatitude('');
    setLongitude('')

    // adicionar farmácia deveria estar aqui, não em um useEffect
    
    }

   useEffect(()=>{
        localStorage.setItem('infos',JSON.stringify(infos));

    },[infos])

  


    const {register,handleSubmit,setValue,setFocus} = useForm();

  

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



    return (

     <div className="corpo">

        <form onSubmit={handleAddFarmacia}>

            <h1 className="titulo">Cadastro de nova Farmácia</h1>

                <h2 className="titulo" >Informações sobre a sua Farmacia</h2>

            <div className="cadastro">
                 <label htmlFor="RazãoSocial" className="RazãoSocial"> Razão Social: </label>
                       
                        <input 
                        required
                        placeholder="digite a Razão Social da sua farmacia"
                        name="RazãoSocial" type='text'  className="input" 
                        onChange={(e)=>setRazaoSocial(e.target.value)}
                        value={razaoSocial}
                        ></input>
          

                <label htmlFor="CNPJ" className="CNPJ"> CNPJ</label>
                        <input 
                        required
                        placeholder="digite o CNPJ da sua farmacia"
                        name="text" type='name' className="input" 
                        onChange={(e)=> setCnpj(e.target.value)}
                        value = {cnpj}
                        ></input>
        
                <label htmlFor="NomeFantasia" className="input"> NomeFantasia</label>
                        <input 
                        required
                        placeholder="digite o NomeFantasia da sua farmacia"
                        name="NomeFantasia" type='text'  className="input" 
                        onChange={(e)=> setNomeFantasia(e.target.value)}
                        value = {nomeFantasia}
                        ></input>
          
                <label htmlFor="Telefone" className="Telefone"> Telefone</label>
                        <input 
                        placeholder="digite o Telefone com DDD da sua farmacia"
                        name="Telefone" type='text'  className="input" 
                        onChange={(e)=> setTelefone(e.target.value)}
                        value = {telefone}
                        ></input>
           
                <label htmlFor="Celular" className="Celular"> Celular</label>
                        <input 
                        required
                        placeholder="digite o Celular da sua farmacia"
                        type='text'  className="input" 
                        onChange={(e)=> setCelular(e.target.value)}
                        value = {celular}
                        ></input>
          

               
            
           
                <label htmlFor="CEP">CEP</label>
                    <input
                    required
                    type="text"  className="input" 
                    {...register("cep")}
                    onBlur={checkCEP}
                    onChange={(e)=> setCep(e.target.value)}
                    value = {cep}
                    ></input>
           
           
                <label htmlFor="Logradouro">Logradouro</label>
                    <input
                    required
                    type="text"  className="input" 
                    {...register("logradouro")}
                    onChange={(e)=> setLogradouro(e.target.value)}
                        value = {logradouro}
                    ></input>
            
          
                <label htmlFor="Numero">Numero</label>
                    <input
                    required
                    name="Numero"
                    type="text"  className="input" 
                    onChange={(e)=> setNumero(e.target.value)}
                    value = {numero}
                    ></input>
           
                <label htmlFor="Bairro">Bairro</label>
                    <input
                    required
                    name="Bairro"
                    type="Bairro"  className="input" 
                    onChange={(e)=> setBairro(e.target.value)}
                    value = {bairro}
                    ></input>
          
                <label htmlFor="Cidade">Cidade</label>
                    <input
                    required
                    name="Cidade"
                    type="Cidade" className="input" 
                    onChange={(e)=> setCidade(e.target.value)}
                    value = {cidade}
                    ></input>
       
                <label htmlFor="Estado">Estado</label>
                    <input
                    required
                    name="Estado"
                    type="Estado"  className="input" 
                    onChange={(e)=> setEstado(e.target.value)}
                    value = {estado}
                    ></input>
         
                <label htmlFor="Complemento">Complemento</label>
                    <input
                    name="Complemento"
                    type="Complemento" className="input" 
                    onChange={(e)=> setComplemento(e.target.value)}
                    value = {Complemento}
                    ></input>
          
                <label htmlFor="Geolocalização">Geolocalização</label>
                    <input
                    required
                    type="text"  className="input" 
                    onChange={(e)=> setLatitude(e.target.value)}
                    value = {latitude}
                    ></input>

                    <input
                    required
                    type="text"  className="input" 
                    onChange={(e)=> setLongitude(e.target.value)}
                    value = {longitude}
                    ></input>
           
               
            
                <button onClick={chamarProximo}>Próximo</button>

            <input type='submit' onSubmit={handleSubmit}></input>
                 
            </div>


         </form>

    </div> 
         
)
            };

        


            export default InformaçõesGerais;

       

