import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


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
        <div>
            <form onSubmit={handleAddMedicamento}>
                <div>
                    <label>Nome do Medicamento:</label>
                    <input 
                    type = 'text'
                    onChange={(e)=> setNomeMedicamento(e.target.value)}
                    value={nomeMedicamento} >
                    </input>
                </div>
                <div>
                    <label>Nome do laboratório</label>
                    <input type = 'text'
                    onChange={(e)=> setNomeLaboratorio(e.target.value)}
                    value={nomeLaboratorio}>
                    </input>
                </div>
                <div>
                    <label>Dosagens do Medicamento</label>
                    <input 
                    type = 'text'
                    onChange={(e)=> setDosagemMedicamento(e.target.value)}
                    value={dosagemMedicamento}>
                    </input>
                </div>
                <div>
                    <label>Descrição do Medicamento</label>
                    <textarea 
                    onChange={(e)=> setDescricaoMedicamento(e.target.value)}
                    value={descricaoMedicamento}>
                    </textarea>
                </div>
                <div>
                    <label>Preço unitário</label>
                    <input 
                    type = 'text'
                    onChange={(e)=> setPrecoMedicamento(e.target.value)}
                    value={precoMedicamento}>
                    </input>
                </div>
                <div>
                    <label> Tipo de Medicamento</label>
                   
                        <select
                        onChange={(e)=> setTipoMedicamento(e.target.value)}
                        value={tipoMedicamento}>
                            <option></option>
                            <option>Referência</option>
                            <option>Genérico</option>
                            <option>Similar</option>
                            <option>Equivalente</option>
                            <option>Controlado</option>
                          
                        </select>
                   
                </div>

                <button type = 'submit'>Enviar Medicamento</button>
            </form>

            <Link to='/home'>Voltar para Home</Link>
        </div>
    )
}

export default CadastroMedicamento;