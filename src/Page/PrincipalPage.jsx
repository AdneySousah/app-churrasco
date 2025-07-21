import './PrincipalPage.css'

import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

function PrincipalPage() {
  const [dtEvento, setDtEvento] = useState('')
  const [qtConvidados, setQtConvidados] = useState('')
  const [check, setCheck] = useState(false)
  const [selected, setSelected] = useState('')
  const [porcentagem, setPorcentagem] = useState('')

  const [total, setTotal] = useState(0)



  useEffect(() => {

  }, [check,selected])


  function calculo(e) {
    e.preventDefault()
   
    
    if (porcentagem) {
      setTotal(parseFloat((qtConvidados * 0.300 * (1 + porcentagem / 100)).toFixed(2)))
      
      return
    }
   setTotal(parseFloat((qtConvidados * 0.300 * 1.10).toFixed(2)))
    


  }
  return (
    <div className="container">
      <h1>Calcule o seu churrasco</h1>

      <form className="form" onSubmit={calculo}>
        <label>Data do evento</label>
        <input type="date" value={dtEvento} onChange={e => setDtEvento(e.target.value)} />

        <label >Quantidade de convidados</label>
        <input type="number" placeholder="digite a quantidade de convidados" value={qtConvidados} onChange={e => setQtConvidados(e.target.value)} />

        <label>Possui crianças</label>
        <input type="checkbox" value={check} onChange={(e) => setCheck(e.target.checked)} />

        {
          check ?
            <input type="number" placeholder="quantas crianças" />
            :

            <input type="number" placeholder="quantas crianças" disabled/>

        }


        <p>O churrasco geralmente é calculado para 300g + 10% de carne por pessoa, o calculo muda
          quano existem crianças na contagem, deseja calcular dessa forma?
        </p>
        <select value={selected} onChange={e => setSelected(e.target.value)}>
          <option value=''>Escolha uma opção</option>
          <option value="sim">Sim</option>
          <option value="nao">Não</option>
        </select>

        <label >Porcentagem nova</label>


        {
          selected =='nao'?
          <input type="number" placeholder="digite a nova percentagem" disabled value={porcentagem} onChange={e => setPorcentagem(e.target.value)} /> 
          :
          <input type="number" placeholder="digite a nova percentagem" value={porcentagem} onChange={e => setPorcentagem(e.target.value)} />
        }

        <button>Fazer o calculo</button>




      </form>
        {
          total ?
            <>
           <p>a quantidade de carne para se comprar é de {total} </p>
           <Link to='/compras'> ir para as compras</Link>
           </>
           :

           <p></p>
        }
     

    </div>
  )
}


export default PrincipalPage