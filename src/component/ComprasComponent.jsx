
import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';


function ComprasComponent({ total }) {


    const notifyZeroItens = () => toast(`Valor está zerado, adicione a quantidade de carne em quilos`);
    const notifyConfirm = () => toast(`Obrigado por usar nossa lista`);
    const [carne, setCarne] = useState(0)

    function adicionar() {
       
        if (carne > total) {
            const continuar = window.confirm('Você está comprando mais carne do que o esperado. Deseja continuar?');
            
            if(continuar){
                notifyConfirm()
                 if (!continuar) return;
            }

            
           
        }
        else if (carne == 0) {
            notifyZeroItens()
            return

        }
    }
    return (
        <div className="container-compras">
            <p className="quantidade">a quantidade de carne para se comprar é de {total} Quilos </p>
            <h1>Lista de compras</h1>
            <p className="carne-list">Adicione a carne a lista</p>
            <input type="number" placeholder="selecione os quilos de carne" value={carne} onChange={e => setCarne(Number(e.target.value))} />
            <button onClick={adicionar}>adicionar</button>

            <ToastContainer />

        </div>
    )
}

export default ComprasComponent