import React from "react";
import { View } from "../cadastro_medicamentos/View";
import CadastroMedicamento from "../cadastro_medicamentos/cadastroMedicamento";

const ListaMedicamentos = () => {

    const medicamentos = localStorage.getItem('medicamentos',medicamentos);

    return (
        
        <div className="container">
        {medicamentos.length>0&&
        <>
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
                    <View />
                </tbody>
            </table>
        </div>
        </>}
        {medicamentos.length < 1 && <div> Nenhum medicamento foi registrado até agora </div>}
    </div>
    )
}
export default ListaMedicamentos;