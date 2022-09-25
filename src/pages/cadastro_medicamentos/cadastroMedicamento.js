import React from "react";
const CadastroMedicamento = () => {
    return(
        <div>
            <form>
                <div>
                    <label>Nome do Medicamento:</label>
                    <input type = 'text' >
                    </input>
                </div>
                <div>
                    <label>Nome do laboratório</label>
                    <input type = 'text'>
                    </input>
                </div>
                <div>
                    <label>Dosagens do Medicamento</label>
                    <input type = 'text'>
                    </input>
                </div>
                <div>
                    <label>Descrição do Medicamento</label>
                    <textarea>
                    </textarea>
                </div>
                <div>
                    <label>Preço unitário</label>
                    <input type = 'text'>
                    </input>
                </div>
                <div>
                    <label> Tipo de Medicamento</label>
                   
                        <select>
                            <option></option>
                            <option>Referência</option>
                            <option>Genérico</option>
                            <option>Similar</option>
                            <option>Equivalente</option>

                        </select>

                        <select>
                            <option></option>
                            <option>Controlado</option>
                            <option>comum</option>
                        </select>
                   
                </div>

                <input type = 'submit'></input>
            </form>
        </div>
    )
}

export default CadastroMedicamento;