import React from 'react'
import usePost from './usePost'
import useGet from './useGet'
import useDelete from './useDelete'

const url = 'https://mymoney-san-default-rtdb.firebaseio.com/movimentacoes/2023-08.json'

function App() {
  const data = useGet(url)
  const [postData, post] = usePost(url)
  const [deleteData, remove] = useDelete()
  
  const saveNew = () => {
    post({ valor: 10 })
  }
  const doRemove = () => {
    remove('https://mymoney-san-default-rtdb.firebaseio.com/movimentacoes/2023-08/-Nd1_RIK6QEyzVuMsJSW.json')
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