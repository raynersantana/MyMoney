import React from 'react'

const AdicionarMes = () => {
    return (
        <React.Fragment>
        <h2>Selecionar mês</h2>
        <select>
          <option value='2023'>2023</option>
          <option value='2024'>2024</option>
        </select>
        <select>
          <option value='01'>01</option>
          <option value='02'>02</option>
        </select>
        <button>Adicionar mês</button>
        </React.Fragment>
    )
}
export default AdicionarMes