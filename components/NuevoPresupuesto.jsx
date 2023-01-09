import { useState, useEffect } from "react";

const [mensaje, setMensaje ] = useState('')

const NuevoPresupuesto = ({presupuesto, setPresupuesto}) => {

  const handlePresupuesto = (e) =>{
    e.preventDefault();
    if(!Number(presupuesto) || Number(presupuesto) < 0 ){
        setMensaje('No es un presupuesto válido')
    } else{
        setMensaje('Si es un presupuesto válido')
    }
  }  

  return (
    <div className="contenedor-presupuesto contenedor sombra">
        <form onSubmit={handlePresupuesto} className="formulario">
            <div className="campo">
                <label>Definir Presupuesto</label>

                <input 
                    className="nuevo-presupuesto "                   
                    type="text" 
                    placeholder="Añadir Presupuesto"
                    value={presupuesto}
                    onChange={e => setPresupuesto(e.target.value)}
                />
            </div>
            <input type="submit" vlaue="Añadir" />
        </form>
    </div>
  )
}

export default NuevoPresupuesto