import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../cadastro_medicamentos/style.css'


const pegarDoLS = () => {
    const data = localStorage.getItem('medicamentos')
    if(data){
        return JSON.parse(data);
    }
    else{
        return [];
    }
}

const CadastroMedicamento = () => {

    const [medicamentos,setMedicamentos] = useState([pegarDoLS])

    const [nomeMedicamento, setNomeMedicamento] = useState("");
    const [nomeLaboratorio, setNomeLaboratorio] = useState("");
    const [dosagemMedicamento, setDosagemMedicamento] = useState("");
    const [descricaoMedicamento, setDescricaoMedicamento] = useState("");
    const [precoMedicamento, setPrecoMedicamento] = useState("");
    const [tipoMedicamento,setTipoMedicamento] = useState("")

    const handleAddMedicamento = (e) => {
        e.preventDefault();

        let medicamento = {
            nomeMedicamento,
            nomeLaboratorio,
            dosagemMedicamento,
            descricaoMedicamento,
            precoMedicamento,
            tipoMedicamento
        }

        setMedicamentos([...medicamentos,medicamento]);
        setNomeMedicamento('');
        setNomeLaboratorio('');
        setDosagemMedicamento('');
        setDescricaoMedicamento('');
        setPrecoMedicamento('')
        setTipoMedicamento('')

    }

    useEffect(()=>{
        localStorage.setItem('medicamentos',JSON.stringify(medicamentos));

    },[medicamentos])

    return(
        <div className="corpo">
            <h1 className="titulo ">Cadastre um Medicamento</h1>
            <form onSubmit={handleAddMedicamento}>
                <div className="cadastro">
                    <label>Nome do Medicamento:</label>
                    <input 
                    className="input"
                    type = 'text'
                    onChange={(e)=> setNomeMedicamento(e.target.value)}
                    value={nomeMedicamento} >
                    </input>
                
                    <label>Nome do laboratório</label>
                    <input type = 'text'
                    className="input"
                    onChange={(e)=> setNomeLaboratorio(e.target.value)}
                    value={nomeLaboratorio}>
                    </input>
                
                    <label>Dosagens do Medicamento</label>
                    <input 
                    className="input"
                    type = 'text'
                    onChange={(e)=> setDosagemMedicamento(e.target.value)}
                    value={dosagemMedicamento}>
                    </input>
                
                    <label>Descrição do Medicamento</label>
                    <textarea 
                    className="input"
                    onChange={(e)=> setDescricaoMedicamento(e.target.value)}
                    value={descricaoMedicamento}>
                    </textarea>
               
                    <label>Preço unitário</label>
                    <input 
                    className="input"
                    type = 'text'
                    onChange={(e)=> setPrecoMedicamento(e.target.value)}
                    value={precoMedicamento}>
                    </input>
                
                    <label> Tipo de Medicamento</label>
                   
                        <select
                        className="input"
                        onChange={(e)=> setTipoMedicamento(e.target.value)}
                        value={tipoMedicamento}>
                            <option></option>
                            <option>Referência</option>
                            <option>Genérico</option>
                            <option>Similar</option>
                            <option>Equivalente</option>
                            <option>Controlado</option>
                          
                        </select>

                        <button type = 'submit'>Enviar Medicamento</button>
                        <br/>
                        <Link to='/home'>Voltar para Home</Link>
                </div>

             
            </form>

          
        </div>
    )
}

export default CadastroMedicamento;