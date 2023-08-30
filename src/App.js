import React from 'react'
import Rest from './rest'

const baseURL = 'https://mymoney-san-default-rtdb.firebaseio.com/'

const { useGet, usePost, useDelete } = Rest(baseURL)

const url = 'https://mymoney-san-default-rtdb.firebaseio.com/movimentacoes/2023-08.json'

function App() {
  const data = useGet('movimentacoes/2023-08')
  const [postData, post] = usePost('movimentacoes/2023-08')
  const [deleteData, remove] = useDelete()
  
  const saveNew = () => {
    post({ valor: 10 })
  }
  const doRemove = () => {
    remove('movimentacoes/2023-08/-Nd1arVJCL9L-e4_91-F')
  }

  return (
    <div>
      <h1>MyMoney</h1>
      { JSON.stringify(data) }
      { data.loading && <p>Loading...</p> }
      <button onClick={saveNew}>salvar</button>
      <pre>{JSON.stringify(postData)}</pre>
      <button onClick={doRemove}>Remover</button>
      <pre>{JSON.stringify(deleteData)}</pre>
    </div>
  )
}

export default App