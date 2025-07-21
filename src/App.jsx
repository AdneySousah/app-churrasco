import './App.css'
import { useState } from 'react'
import ComprasComponent from './component/ComprasComponent'


function App() {
  const [dtEvento, setDtEvento] = useState('')
  const [qtConvidados, setQtConvidados] = useState('')
  const [selected, setSelected] = useState('')
  const [porcentagem, setPorcentagem] = useState('')

  const [total, setTotal] = useState(0)

  const [container, setContainer] = useState(false)

  function calculo(e) {
    e.preventDefault()
    console.log('value',selected)

    if (!qtConvidados || qtConvidados <= 0) {
      alert("Insira uma quantidade válida de convidados");
      return;
    }

    if (porcentagem) {
      setTotal(parseFloat((qtConvidados * 0.300 * (1 + porcentagem / 100)).toFixed(2)))
      setContainer(true)

      return
    }
    setTotal(parseFloat((qtConvidados * 0.300 * 1.10).toFixed(2)))
    setContainer(true)

    setPorcentagem('')
    setQtConvidados('')
    setDtEvento('')
    setSelected('')



  }
  return (
    <div className="container">
      <h1>Calcule o seu churrasco</h1>

    <div className={container ? 'container-formulario': ''}>


      <form className="form" onSubmit={calculo}>
        <label>Data do evento</label>
        <input type="date" value={dtEvento} onChange={e => setDtEvento(e.target.value)} />

        <label >Quantidade de convidados</label>
        <input type="number" placeholder="digite a quantidade de convidados" value={qtConvidados} onChange={e => setQtConvidados(e.target.value)} required />

        <p>O churrasco geralmente é calculado para 300g + 10% de carne por pessoa, caso desejar você pode acrescentar uma porcentagem maior abaixo.
        </p>
        <select value={selected} onChange={e => setSelected(e.target.value)}>
          <option value=''>Escolha uma opção</option>
          <option value="sim">Sim</option>
          <option value="nao">Não</option>
        </select>

        <label >Porcentagem nova</label>


        {
          selected!=='sim' ? 
            <input type="number" placeholder="digite a nova percentagem" disabled value={porcentagem} onChange={e => setPorcentagem(Number(e.target.value))} />
            : 
            <input type="number" placeholder="digite a nova percentagem" value={porcentagem} onChange={e => setPorcentagem(Number(e.target.value))} required/>
       
        }

        <button>Fazer o calculo</button>




      </form>

      {
        total ?
          <>
          <div className='lista-Compras'>
            
            <ComprasComponent total={total} />
        </div>  
          </>
          :

          <p></p>
      }

      </div>
    </div>
  )
}


export default App
