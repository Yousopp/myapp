import React, { useState } from "react"

const ButtonChart = ({updateChart}) => {

    // HOOK de mes valeurs, value et ville
    // Cela me permet de garder l'état initiale en mémoire
    // Et de changer l'état quand la variable est appelé
    // Sans modifier mon état par défaut
    
    const [value, setValue] = useState()
    const [ville, setVille] = useState()

    const addData = () => {
        updateChart(value, ville)
    }

    return (
        <div className="inputBox">
            <input type="number" className="inputAdd" placeholder="Valeur" step="0.1" min="0" id="inputData" onChange={event => setValue(event.target.value)}/>
            <input type="text" className="inputAdd" placeholder="Ville" id="label" onChange={event => setVille(event.target.value)}/>
            <button onClick={addData} id="insertData">Ajouter une donnée</button>
        </div>
    )
}

export default ButtonChart