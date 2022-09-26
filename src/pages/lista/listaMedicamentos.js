import React from "react";
import TabelaMedicamentos from "./tabela";
import CadastroMedicamento from "../cadastro_medicamentos/cadastroMedicamento";
import { View } from "../cadastro_medicamentos/View";

const ListaMedicamentos = (medicamentos) => {

    return(
        <div className="post">
        <table>
            <thead>
                <tr>
                    <th>Nome medicamento</th>
                    <th>Nome do laboratório</th>
                    <th>Descrição do Medicamento</th>
                    <th>Dosagem do medicamento</th>
                    <th>Preço do medicamento</th>
                    <th>Tipo de medicamento</th>
                    <th >Delete</th>
                </tr>
            </thead>
            <tbody>
             
            </tbody>
        </table>
    </div>
   
    )
}
export default ListaMedicamentos;