import React from "react"

const ButtonRemove = ({removeData}) => {

    const suppData = () => {
        removeData()
    }

    return (
        <div className="inputBox">
            <button onClick={suppData} id="removeData">Supprimer une donnée</button>
        </div>
    )
}

export  default ButtonRemove