import React from "react";
import Icon from "react-icons-kit";

export const View = ({medicamentos}) => {
    return (
        medicamentos.map(medicamento=>(
            <tr key={medicamento.nomeMedicamento}>
                <td>{medicamento.nomeMedicamento}</td>
                <td>{medicamento.nomeLaboratorio}</td>
                <td>{medicamento.dosagemMedicamento}</td>
                <td>{medicamento.descrcaoMedicamento}</td>
                <td>{medicamento.precoMedicamento}</td>
                <td>{medicamento.tipoMedicamento}</td>
                <td className="delete">
                    <Icon icon={'trash'} />
                </td>
            </tr>
          
        ))
    )
}