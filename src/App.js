import React from 'react'
import Rest from './rest'
import Header from './elements/Header'
import Meses from './Meses'
import AdicionarMes from './AdicionarMes'

const baseURL = 'https://mymoney-san-default-rtdb.firebaseio.com/'

const { useGet, usePost, useDelete } = Rest(baseURL)

const url = 'https://mymoney-san-default-rtdb.firebaseio.com/movimentacoes/2023-08.json'

function App() {
  const data = useGet('meses')
  // const [postData, post] = usePost('movimentacoes/2023-08')
  // const [deleteData, remove] = useDelete()

  const saveNew = () => {
    // post({ valor: 10 })
  }
  const doRemove = () => {
    // remove('movimentacoes/2023-08/-Nd1arVJCL9L-e4_91-F')
  }

  return (
    <div>
      <Header />
      <div className='container'>
        <AdicionarMes />
        <Meses />
      </div>
    </div>
  )
}

export default App